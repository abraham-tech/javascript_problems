class Solution {
    public static void main(String[] args) {
        // Create an instance of CompensationDetails with the required parameters
        CompensationDetails details = new CompensationDetails(5000.00, 0.20, 200.00, 300.00);

        // Calculate the total compensation using the helper class
        double totalCompensation = calculateCompensation(details);
        System.out.println("Total Compensation: $" + totalCompensation);
    }

    // Refactored method with a single argument
    private static double calculateCompensation(CompensationDetails details) {
        double baseCompensation = details.getBaseSalary();
        double totalBenefits = baseCompensation + details.getBenefits();
        double subtotalCompensation = totalBenefits + details.getOvertimePay();
        double totalCompensation = subtotalCompensation - (subtotalCompensation * details.getTaxRate());
        return totalCompensation;
    }
}

// Helper class to encapsulate compensation-related details
class CompensationDetails {
    private double baseSalary;
    private double taxRate;
    private double benefits;
    private double overtimePay;

    // Constructor to initialize the fields
    public CompensationDetails(double baseSalary, double taxRate, double benefits, double overtimePay) {
        this.baseSalary = baseSalary;
        this.taxRate = taxRate;
        this.benefits = benefits;
        this.overtimePay = overtimePay;
    }

    // Getter methods for accessing private fields
    public double getBaseSalary() {
        return baseSalary;
    }

    public double getTaxRate() {
        return taxRate;
    }

    public double getBenefits() {
        return benefits;
    }

    public double getOvertimePay() {
        return overtimePay;
    }
}
