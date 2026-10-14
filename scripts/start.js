/**
 * 启动包装脚本：从 3000 开始探测空闲端口，被占用则自动 +1，
 * 然后以 --port 参数启动 docusaurus start。
 *
 * 探测方式为主动连接（而非绑定），并同时覆盖 IPv4 (127.0.0.1) 与
 * IPv6 (::1) 回环地址：Windows 下两个地址族可以各自绑定同一端口号，
 * 只做绑定测试会漏判监听在 0.0.0.0 上的进程。
 */
const net = require('net');
const {spawn} = require('child_process');

const DEFAULT_PORT = 3000;
const HOSTS = ['127.0.0.1', '::1'];

function probePort(port, host) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const done = (inUse) => {
      socket.destroy();
      resolve(inUse);
    };
    socket.setTimeout(500);
    socket.once('connect', () => done(true));
    socket.once('timeout', () => done(true)); // 结果不确定时宁可跳过该端口
    socket.once('error', () => done(false)); // 连接被拒绝 => 端口空闲
    socket.connect(port, host);
  });
}

async function isPortInUse(port) {
  for (const host of HOSTS) {
    if (await probePort(port, host)) {
      return true;
    }
  }
  return false;
}

async function findFreePort(startPort) {
  let port = startPort;
  while (await isPortInUse(port)) {
    port += 1;
  }
  return port;
}

async function main() {
  const port = await findFreePort(DEFAULT_PORT);
  if (port !== DEFAULT_PORT) {
    console.log(
      `Port ${DEFAULT_PORT} is already in use, starting on port ${port} instead.`,
    );
  }
  const child = spawn('docusaurus', ['start', '--port', String(port)], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  child.on('exit', (code) => process.exit(code ?? 0));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
