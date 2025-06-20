const base = {
    get() {
        return {
            url : "http://localhost:8080/xinguanwuzi/",
            name: "xinguanwuzi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xinguanwuzi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "新冠物资管理"
        } 
    }
}
export default base
