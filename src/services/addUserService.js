
export default function addUserService(payload) {
    const {user, duration} = payload
    console.log('name: '+ name);
    return new Promise(resolve => setTimeout(resolve, duration))
    .then(()=>{
        return {user};
    });
  }