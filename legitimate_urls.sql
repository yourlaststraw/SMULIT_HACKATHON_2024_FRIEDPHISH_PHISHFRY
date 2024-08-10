-- create database if not created
CREATE DATABASE IF NOT EXISTS smulit2024;
USE smulit2024;

-- Create a table to store legitimate URLs
CREATE TABLE IF NOT EXISTS legitimate_urls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL UNIQUE
);

-- Insert some sample legitimate URLs
INSERT INTO legitimate_urls (url) VALUES
('https://www.google.com'),
('https://safe-site.org'),
('http://trusted.com/page');
