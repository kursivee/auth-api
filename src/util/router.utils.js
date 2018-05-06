export function wrapRouter(path, router) {
    return {
        path: path,
        router: router
    }
}

export function connectRouters(app) {
    return (routers) => {
            routers().forEach(route => {
            app.use(route.path, route.router) 
        });
    }
}