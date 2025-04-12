
export function sendMessage(message){
    console.log('You sent: ',message);
}

export function createConnection(serverUrl,roomId){
    return{
        connect(){
            console.log('Connecting to  ' + roomId + " room at" + serverUrl + " ");

        },
        disconnect(){
            console.log("Disconnect from  "+ roomId + " room at"+ serverUrl + " ");

        }
    };
}