export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false, //отключить сообщения при обновлении
        port: 3000,
    });
}