function logincheck(){
    const daform=document.getElementById("login-form")
    const dapass=document.getElementById("password")
    const daemail=document.getElementById("username")
    const daerror=document.getElementById("error-box")
    daform.addEventListener("submit",(e)=>{
        e.preventDefault()
        if(daemail.value.includes("@")){
            daerror.textContent="why gmail"
        }else{
            daerror.textContent="site under construction fn"
        }

    })
    
}