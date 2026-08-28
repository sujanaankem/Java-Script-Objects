let employees = 

    [
        {
            id: 201600,
            name: "K.Rahul",
            department: "development",
            salary: "25K",
        },
        {
            id: 201601,
            name: "A.Sujana",
            department: "development",
            salary: "25K",
        },
        {
            id: 201602,
            name: "M.Pavan",
            department: "development",
            salary: "25K",
        },
        {
            id: 201603,
            name: "G.Amitha",
            department: "development",
            salary: "25K",
        },
        {
            id: 201604,
            name: "V.Jahnavi",
            department: "development",
            salary: "25K",
        }

    ]

    function onClickCheck(){
        debugger;
        
        for(i=0 ;i< employees.length ;i++){
              document.getElementById("pResult").innerHTML += `${i+1})  id:${employees[i].id} </br> name: ${employees[i].name} <br/> department: ${employees[i].department} <br/> salary: ${employees[i].salary}<hr>`;
            
        }
     
        
    }