import Footer from "./NavbarMetodlari/Footer"
import Header from "./NavbarMetodlari/Header"



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