package com.demo.hospital;

class Patient {
    private String name;

    public Patient(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

class Doctor {
    private String specialty;

    public Doctor(String specialty) {
        this.specialty = specialty;
    }

    public String getSpecialty() {
        return specialty;
    }
}

public class AppointmentScheduler {
    public void bookAppointment(Patient patient, Doctor doctor) {
        System.out.println("Booking appointment for: " + patient.getName());
        System.out.println("Doctor: " + doctor.getSpecialty());
    }

     public static void main(String[] args) {
        System.out.println("Hello tfffd!");
        AppointmentScheduler scheduler = new AppointmentScheduler();
        Patient patient = new Patient("John");
        scheduler.bookAppointment(patient, new Doctor("Orthopedic"));
    }
}