const FormContainer = () => {
    
    return(
        <>
       <section id="formContainer"> 
      <form id="StudentForm">
        <div className="input-field">
            <label htmlFor="name">Student Name</label>
            <input type="text" id="name" name="name"/>
        </div>
        <div className="input-field">
            <label htmlFor="Program">Program</label>
            <input type="text" id="Program" name="Program"/>   

        </div>
        <button type="submit">ADD STUDENT</button>
        
      </form>

    </section>
    </>
   )

}

export default FormContainer