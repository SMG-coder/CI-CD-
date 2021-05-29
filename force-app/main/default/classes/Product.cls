public with sharing class Product {
    @AuraEnabled (cacheable = true)
    public static List<Product2> getProducts(){

        List<Product2> listOfProducts = [Select Id,Name,Description from Product2 limit 5];
        return listOfProducts;
        
    }
}