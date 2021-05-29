public with sharing  class listAccounts {
    
   @AuraEnabled(cacheable = true)
    
    public static List<Account> retrieveAccountRecord()
    {
        List<Account> accList = [Select id, Name from Account limit 10];
        return accList;
    }
}