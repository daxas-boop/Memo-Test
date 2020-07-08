/// <reference types="Cypress" />

const URL = "http://127.0.0.1:8080"

context("MemoTest", () =>{
    before(() =>{
        cy.visit(URL);
    });

    describe("juega al memotest", () =>{
       
        it("se asegura que haya un tablero con cuadros", ()=>{
            cy.get("#tablero").find(".cuadro").should("have.length",16)
        })
        
        it("se asegura que los cuadros sean aleatorios", ()=>{
                
            cy.get(".cuadro").then(cuadros =>{
                let claseCuadros =[];
                cuadros.each(function(i,cuadros){
                    claseCuadros.push(cuadros.className)
                });

                cy.visit(URL)

                cy.get(".cuadro").then(nuevosCuadros => {
                    let nuevasClasesCuadros=[];
                    nuevosCuadros.each(function(i,cuadros){
                        nuevasClasesCuadros.push(cuadros.className);
                    });

                    cy.wrap(claseCuadros).should("not.deep.equal", nuevasClasesCuadros)
                });
            });
        });



    });

});

