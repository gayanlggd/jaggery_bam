
function createAsyncDatapublisher(url, username, password){
    var AsyncDataPublisher = Packages.org.wso2.carbon.databridge.agent.thrift.AsyncDataPublisher;
    var asyncDataPublisher = new AsyncDataPublisher(url, username, password);
    return  asyncDataPublisher;
}


