class Solution2 {
    public static void main(String[] args) {
        Account account = new Account("Inactive");

        // Activating the account
        activateAccount(account);
        System.out.println("Account status after activation: " + account.getStatus());

        // Deactivating the account
        deactivateAccount(account);
        System.out.println("Account status after deactivation: " + account.getStatus());
    }

    // Method to activate the account
    private static void activateAccount(Account account) {
        account.setStatus("Active");
    }

    // Method to deactivate the account
    private static void deactivateAccount(Account account) {
        account.setStatus("Inactive");
    }
}

class Account {
    private String status;

    public Account(String status) {
        this.status = status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
