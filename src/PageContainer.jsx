import Footer from "./Pages/Footer"
import Header from "./Pages/Header"



const PageContainer =(a)=>{
    return(
        <>
            <Header/>
            <main>{a.children}</main>
            <Footer/>
           
        </>
    )
}
export default PageContainer