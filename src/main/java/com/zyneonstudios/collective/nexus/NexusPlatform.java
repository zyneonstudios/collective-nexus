package com.zyneonstudios.collective.nexus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NexusPlatform {

    private static NexusPlatform instance;

    static void main(String[] args) {
        instance = new NexusPlatform();
        SpringApplication.run(NexusPlatform.class, args);
    }

    public static NexusPlatform getInstance() {
        return instance;
    }
}