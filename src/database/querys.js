  
export const querys = {
    getAllOrders: "CALL ALLORDERS",
    getUser: "CALL VALID(?, ?)",
    getToken: "CALL TOKEN(?)",
    findOne: "CALL FINDONE(?)",
    addUser:"CALL ADDUSER(?,?,?,?)"
};



//   getProducById: "SELECT * FROM Products Where Id = @Id",
//   addNewProduct:
//     "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
//   deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
//   getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
//   updateProductById:
//     "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",