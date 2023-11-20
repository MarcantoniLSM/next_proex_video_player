package com.example.demo.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserRecordDto(@NotBlank String nameUser, @Email @NotBlank String emailUser, @NotBlank String passwordUser) {
}
