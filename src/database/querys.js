  
export const querys = {
    getAllOrders: "SELECT * FROM orden",
    getUser: "SELECT * FROM users WHERE username=@username AND password=@password",
};



//   getProducById: "SELECT * FROM Products Where Id = @Id",
//   addNewProduct:
//     "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
//   deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
//   getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
//   updateProductById:
//     "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",