var DataPublisherHolder = Packages.org.wso2.carbon.databridge.agent.thrift.lb.DataPublisherHolder;
var ReceiverGroup = Packages.org.wso2.carbon.databridge.agent.thrift.lb.ReceiverGroup;
var LoadBalancingDataPublisher = Packages.org.wso2.carbon.databridge.agent.thrift.lb.LoadBalancingDataPublisher;
var ArrayList = Packages.java.util.Arraylist;


//Details about receiver groups can be found here http://docs.wso2.org/wiki/display/BAM230/Setting+up+Multi+Receiver+and+Load+Balancing++Data+Agent
function createLoadBalancingDataPublisher(receiverGroupUrls,username,password){
    var allReceiverGroups = new ArrayList();

    for (var i=0 ; i< receiverGroupUrls.length ; i++){
        var dataPublisherHolders = new ArrayList();
        var urls = receiverGroupUrls[i].split(",");

        for(var j=0 ; j< urls.length ; i++) {
        var aNode =    new DataPublisherHolder(null, urls[i].trim() , username, password);
        dataPublisherHolders.add(aNode);
         }
        var receiverGroup = new ReceiverGroup(dataPublisherHolders);
        allReceiverGroups.add(receiverGroup);
    }
    var loadBalancingDataPublisher =  new LoadBalancingDataPublisher( allReceiverGroups);
    return loadBalancingDataPublisher;
}



