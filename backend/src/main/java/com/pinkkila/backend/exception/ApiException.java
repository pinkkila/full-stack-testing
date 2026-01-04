package com.pinkkila.backend.exception;

public record ApiException(int statusCode, String error, String message) {
}
