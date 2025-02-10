describe("Pruebas de la aplicación Vue 3 en App.vue", () => {
    beforeEach(() => {
      cy.visit("/"); // Visita la página principal
    });
  
    it("Verifica que el título sea visible al cargar la página", () => {
      cy.contains("h1", "Bienvenido a Vue").should("be.visible");
    });
  
    it("Verifica que inicialmente no haya mensaje debajo del botón", () => {
      cy.get("span").should("not.have.text");
    });
  
    it("Verifica que al hacer clic en el botón, aparezca el primer mensaje", () => {
      cy.get("button").click();
      cy.get("span").should("have.text", "Has hecho clic");
    });
  
    it("Verifica que los mensajes cambien cíclicamente al hacer clic múltiples veces", () => {
      const expectedMessages = [
        "",
        "Has hecho clic",
        "¡Otro clic!",
        "Sigues aquí...",
        "Interesante, ¿eh?",
        "¿Cuántos más harás?",
        "Para de hacer clic",
        "¡No hagas clic!",
        "¡YA BASTA!",
        "no vas a parar, ¿verdad?"
      ];
  
      expectedMessages.forEach((message, index) => {
        cy.get("button").click(); // Haz clic en el botón
        cy.get("span").should("have.text", message); // Verifica el mensaje actual
  
        // Si es el último mensaje, el siguiente clic debe volver al primero
        if (index === expectedMessages.length - 1) {
          cy.get("button").click();
          cy.get("span").should("have.text", expectedMessages[0]);
        }
      });
    });
  });