create database rideaway_db;
use rideaway_db;
-- user schema
CREATE TABLE user (
	id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(10) NOT NULL UNIQUE,
    email_verified BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT FALSE,
    is_provider BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES profile(id) ON DELETE CASCADE
);

-- profile schema
CREATE TABLE profile(
	id INT AUTO_INCREMENT PRIMARY KEY,
    profile_img VARCHAR(300),
    gender ENUM('male', 'female', 'others'),
    address TEXT,
    pincode VARCHAR(6),
    aadhar_number VARCHAR(12) UNIQUE,
    dl_number VARCHAR(20) UNIQUE,
    aadhar_verified BOOLEAN DEFAULT FALSE,
    dl_number_verified BOOLEAN DEFAULT FALSE
);

-- bike schema
CREATE TABLE bike(
	id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id INT NOT NULL,
    model varchar(200) NOT NULL,
    brand varchar(100) NOT NULL,
    description TEXT NOT NULL,
	vehicle_type ENUM('petrol', 'electric') NOT NULL,
    tag ENUM('sports', 'economic', 'luxury') NOT NULL,
    price INT NOT NULL,
    available_status BOOLEAN DEFAULT FALSE,
    rc_number VARCHAR(50) NOT NULL UNIQUE,
    rc_status ENUM("ACTIVE","INACTIVE"),
    registration_date DATE NOT NULL ,
    insurance_upto DATE NOT NULL,
    insurance_status BOOLEAN DEFAULT FALSE,
    puc_upto DATE NOT NULL,
    puc_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES user(id) ON DELETE CASCADE
);



-- booking schema
CREATE TABLE booking(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    owner_id INT NOT NULL,
    bike_id INT NOT NULL,
    booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    booking_confirmed BOOLEAN,
    picked_up TIMESTAMP,
    pick_up_confirmed BOOLEAN,
    dropped_at TIMESTAMP,
    dropped_confirmed BOOLEAN,
    is_cancelled BOOLEAN,
    cancelled_at TIMESTAMP,
    cancelled_by ENUM('provider', 'consumer') DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (owner_id) REFERENCES user(id),
    FOREIGN KEY (bike_id) REFERENCES bike(id)
);

-- payment schema
CREATE TABLE payment(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    owner_id INT NOT NULL,
    booking_id INT NOT NULL,
    amount INT NOT NULL,
    payment_mode ENUM('cash', 'online'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (owner_id) REFERENCES user(id),
    FOREIGN KEY (booking_id) REFERENCES booking(id)
);

-- otp schema
CREATE TABLE otp(
	id INT AUTO_INCREMENT PRIMARY KEY,
    otp_for ENUM('email', 'phone') NOT NULL,
    otp VARCHAR(6) NOT NULL UNIQUE,
    email VARCHAR(100),
    phone_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ratings and reviews schema
CREATE TABLE rating_reviews(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    bike_id INT NOT NULL,
    rating INT,
    review TEXT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (bike_id) REFERENCES bike(id)
);

-- bike images schema
CREATE TABLE bike_images(
	id INT AUTO_INCREMENT PRIMARY KEY,
    bike_id INT NOT NULL,
    img_url VARCHAR(300),
    FOREIGN KEY (bike_id) REFERENCES bike(id)
);





-- Queries
create database rideaway_db; 
use rideaway_db;