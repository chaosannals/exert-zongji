import ZongJi from "zongji";

const zj = new ZongJi({
    host: '127.0.0.1',
    user: 'exert',
    password: 'password',
});

zj.on('binlog', evt => evt.dump());
zj.start({
    serverId: 100,
    startAtEnd: false, //
    filename: 'binlog.000221',
    position: 4,
    includeEvents: [
        'rotate',
        'tablemap',
        'writerows',
        'updaterows',
        'deleterows',
    ],
})

process.on('SIGINT', () => {
    console.log('程序被关闭');
    zj.stop();
    process.exit();
});