-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2022 at 07:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_n_beverage`
--

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `favouriteID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `restaurantID` int(11) NOT NULL,
  `restaurant_title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`favouriteID`, `CustomerID`, `restaurantID`, `restaurant_title`) VALUES
(2, 5, 1, 'Mcdonald'),
(3, 5, 2, 'Ajisen Ramen'),
(4, 5, 6, 'Flute'),
(5, 6, 7, 'KFC'),
(6, 6, 1, 'Mcdonald'),
(7, 5, 1, 'Mcdonald'),
(8, 5, 1, 'Mcdonald'),
(9, 5, 2, 'Aijsen Ramen'),
(10, 5, 2, 'Aijsen Ramen'),
(11, 5, 2, 'ned'),
(12, 5, 2, 'ned'),
(15, 17, 3, 'Monster Curry');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `Food_id` int(11) NOT NULL,
  `TypeOfRestaurant` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Halal` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `popularity` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone_number` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` decimal(20,16) NOT NULL,
  `Longitude` decimal(20,14) NOT NULL,
  `Monday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tuesday` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Wednesday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Thursday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Friday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Saturday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sunday` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`Food_id`, `TypeOfRestaurant`, `Picture`, `title`, `Halal`, `popularity`, `address`, `telephone_number`, `latitude`, `Longitude`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`) VALUES
(1, 'Fast', 'images/Fast_Food/Mcdonalds.png', 'Mcdonald\'s', 'Halal', 'popular', '10 Tampines Street 23, #01-01, Tampines East ', '62230729', '1.3533456565713176', '103.95468007562523', '7am - 12am', '7am - 12am', '7am - 12am', '7am - 12am', '7am - 12am', '7am - 12am', '7am - 12am'),
(2, 'Japanese', 'images/JapaneseFood/Aijsen_Ramen.png', 'Ajisen Ramen', 'Non-Halal', 'not popular', '311 New Upper Changi Rd, Bedok Mall, #01-69, ', '68449373', '1.3244085252867543', '103.92930783678611', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11:30am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm'),
(3, 'Japanese', 'images/JapaneseFood/Monster_Curry.png', 'Monster Curry', 'Non-Halal', 'popular', '10 Tampines Central 1, 01-08/09/10 Tampines O', '65099968', '1.3542146565950326', '103.94503249888470', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm'),
(4, 'Western', 'images/Western_Food/iSteak.png', 'iSteaks', 'Halal', 'popular', '10 Tampines Central 1, #04-04/05, Singapore 5', '62858839', '1.3540726768226719', '103.94519631100540', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm', '11am - 10pm'),
(5, 'Malay', 'images/Malay_Food/Ayam_Penyet_president.png', 'Ayam Penyet President', 'Halal', 'not popular', '2 Tampines Central 5, #B1-20 Century Square, ', '62602469', '1.3525162951821574', '103.94397276305352', '11am -9:30pm', '11am - 9pm', '11:30am - 9pm', '11:30am - 9pm', '11:30am - 9pm', '11:30am - 9pm', '11:30am - 9pm'),
(6, 'Fine', 'images/Fine_Dining/Flutes.png', 'Flutes', 'Non-Halal', 'not popular', '93 Stamford Rd, #01-02 National Museum of Sin', '63388770', '1.2966740707660052', '103.84843767461108', 'closed', '11:30am - 2pm 6 - 10pm', '11:30am - 2pm 6-10pm', '11:30am - 2pm 6-10pm', '11:30am - 2pm 6 - 11pm', '11am - 2pm 6 - 11pm', '10:30 am - 4pm'),
(7, 'Fast', 'images/FastFood/KFC.png', 'KFC', 'Halal', 'popular', '208D New Upper Changi Rd, 01 01A, Singapore ', '67845664', '1.3257382062971999', '103.93002043921771', '10am - 11pm', '10am - 11pm', '10am - 11pm', '10am - 11pm', '10am - 11pm', '10am - 11pm', '10am - 11pm'),
(8, 'Chinese', 'images/Chinese/328_katong_Laksa', '328 katong Laksa', 'Non-Halal', 'popular', '51 E Coast Rd, Singapore 428770', '87546847', '1.3050722842783844', '103.90326936705215', '9:30am - 9:30pm', '9:30am - 9:30pm', '9:30am - 9:30pm', '9:30am - 9:30pm', '9:30am - 9:30pm', '9:30am - 9:30pm', '9:30am - 9:30pm'),
(9, 'Chinese', 'images/Chinese/Tiong_Bahru_Boneless_Hainanese_Chicken_Rice', 'Tiong Bahru Boneless Hainanese Chicken Rice', 'Non-Halal', 'popular', '5 Changi Village Rd, #01-2037, Singapore 5000', '65451142', '1.3891960421728489', '103.98683644874521', '10:30am - 9pm', '10:30am - 9pm', '10:30am - 9pm', '10:30am - 9pm', '10:30am - 9pm', '10:30am - 9pm', '10:30am - 9pm'),
(10, 'Malay', 'images/Malay/A1', 'A1 Family Ayam Goreng & Western Food', 'Non-Halal', 'not popular', 'Blk 477 Tampines Street 43, #01-192, Singapor', '67860713', '1.3611832128773875', '103.95265983600537', '8:30am - 12:30am', '8:30am - 12:30am', '8:30am - 12:30am', '8:30am - 12:30am', '8:30am - 12:30am', '8:30am - 12:30am', '8:30am - 12:30am'),
(11, 'Western', 'images/western/Chicken', 'Chicken Supremo Pte Ltd', 'Halal', 'popular', '493, Block 493 Jurong West Street 41, 01-02/0', '123', '0.0000000000000000', '0.00000000000000', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm'),
(12, 'Cafe', 'images/Cafe/Sheik', 'Sheik Jalani Restaurant', 'Halal', 'popular', '527 Bedok North Street 3, Singapore 460527', '132', '1.3338871906638790', '103.92854426167914', 'open 24 hours', 'open 24 hours', 'open 24 hours', 'open 24 hours', 'open 24 hours', 'open 24 hours', 'open 24 hours'),
(13, 'Chinese', 'images/Chinese/A_One', 'A-One Signature @AMK Hub', 'Non-Halal', 'popular', '02-17/18, 53 Ang Mo Kio Ave 8, 3, Singapore 5', '62358638', '1.3690385309836974', '103.84817662638602', '10:30am - 9:30pm', '10:30am - 9:30pm', '10:30am - 9:30pm', '10:30am - 9:30pm', '10:30am - 9:30pm', '10:30am - 9:30pm', '10:30am - 9:30pm'),
(14, 'Japanese', 'images/Japanese/Akimitsu', 'Akitmitsu', 'Halal', 'popular', '68 Orchard Rd, #04-65, Singapore 238839', '62643390', '1.3005567307577228', '103.84499953408385', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm'),
(15, 'Indian', 'images/Indian/Anjappar', 'Anjappar Chettinad Restaurant', 'Halal', 'not popular', '76-78 Race Course Rd, Singapore 218575', '62965545', '1.3089417656840936', '103.85134756140855', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm', '11am - 11pm'),
(16, 'Western', 'images/Western/Astons', 'ASTONS Specialities', 'Halal', 'popular', '2 Handy Road #04-03/04 The Cathay Building, 2', '68875889', '1.2994655756247042', '103.84734138449917', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm'),
(17, 'Thai', 'images/Tahi/Bali', 'Bali Tahi', 'Non-Halal', 'popular', '83 Punggol Central, #B1-13, Singapore 828761', '63853630', '1.4068130666867487', '103.90199541474631', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm', '11:30am - 10pm'),
(18, 'Malay', 'images/malay/Crave', 'Crave', 'Halal', 'popular', '311 New Upper Changi Road Bedok Mall, B2, 22,', '91899747', '1.3245516006147626', '103.92928191193603', '10am - 8pm', '10am - 8pm', '10am - 8pm', '10am - 8pm', '10am - 8pm', '10am - 8pm', '10am - 8pm'),
(19, 'Malay', 'images/malay/Encik', 'Encik Tan', 'Halal', 'Not Popular', 'Compass One, 1 Sengkang Square #02-29, 545078', '63701155', '1.3917838815211914', '103.89521602999396', '9am - 10pm', '9am - 10pm', '9am - 10pm', '9am - 10pm', '9am - 10pm', '9am - 10pm', '9am - 10pm'),
(20, 'Fast', 'images/Fast_Food/Fish', 'Fish & Co.', 'Halal', 'not popular', '53 Ang Mo Kio Avenue 3 #02-02 AMK Hub, 569933', '65556298', '1.3696277205196055', '103.84821056930554', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `Review_ID` int(11) NOT NULL,
  `Customer_username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RestaurantID` int(11) NOT NULL,
  `Review` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Rating` int(11) NOT NULL,
  `Post_Date` date DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`Review_ID`, `Customer_username`, `RestaurantID`, `Review`, `Rating`, `Post_Date`, `title`) VALUES
(3, 'victorchua865@gmail.com', 1, 'actually not that great', 4, '0000-00-00', 'Mcdonalds'),
(7, 'funnydog865@gmail.com', 1, 'bad', 1, '0000-00-00', 'Mcdonalds'),
(9, 'victorchua865@gmail.com', 1, 'nice sushi', 5, '0000-00-00', 'Mcdonalds'),
(15, 'dogandcat865@gmail.com', 1, 'Not Bad', 5, '0000-00-00', 'Mcdonalds'),
(17, 'funnydog865@gmail.com', 1, 'e', 3, '0000-00-00', 'Mcdonalds'),
(18, 'funnydog865@gmail.com', 2, ' Bad', 2, '0000-00-00', 'Aijsen Ramen'),
(20, 'victorchua865@gmail.com', 3, 'this is good', 5, '0000-00-00', 'Monster Curry'),
(21, 'funnydog865@gmail.com', 6, 'very good', 5, '0000-00-00', 'Flutes '),
(22, 'dogandcat865@gmail.com', 6, 'actually quite great for 22', 4, '0000-00-00', 'Flutes'),
(23, 'victorchua865@gmail.com', 7, 'actually quite great for 23', 4, '0000-00-00', 'KFC'),
(24, 'dogandcat865@gmail.com', 7, 'very good', 5, '0000-00-00', 'KFC'),
(25, 'victorchua865@gmail.com', 7, 'very good', 5, '0000-00-00', 'KFC'),
(31, 'victorchua865@gmail.com', 7, 'very good', 5, '0000-00-00', 'KFC'),
(32, 'victorchua865@gmail.com', 7, 'very good', 5, '0000-00-00', 'KFC'),
(33, 'victorchua865@gmail.com', 7, 'very good', 5, '0000-00-00', 'KFC'),
(34, 'tissue', 7, 'very good', 5, '2022-01-09', 'KFC'),
(36, 'tissue', 10, 'very good', 5, '2022-01-09', 'A1 Family Ayam Goreng & Western Food'),
(38, 'tissue', 10, 'actually quite great', 4, '2022-01-09', 'A1 Family Ayam Goreng & Western Food'),
(39, 'tissue', 10, 'very good', 5, '2022-01-09', 'A1 Family Ayam Goreng & Western Food'),
(40, 'iosboy', 10, 'actually quite great', 4, '2022-01-09', 'A1 Family Ayam Goreng & Western Food'),
(42, 'android', 10, 'very good', 5, '2022-01-10', 'A1 Family Ayam Goreng & Western Food'),
(43, 'android', 10, 'actually quite great', 4, '2022-01-10', 'A1 Family Ayam Goreng & Western Food');

-- --------------------------------------------------------

--
-- Table structure for table `user_database`
--

CREATE TABLE `user_database` (
  `CustomerID` int(11) NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sign_Up_Date` date DEFAULT NULL,
  `Contact_Number` int(8) NOT NULL,
  `Address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` int(6) NOT NULL,
  `Username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Gender` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_database`
--

INSERT INTO `user_database` (`CustomerID`, `Email`, `Sign_Up_Date`, `Contact_Number`, `Address`, `postal_code`, `Username`, `Password`, `Gender`, `first_name`, `last_name`) VALUES
(5, 'victorchua865@gmail.com', '0000-00-00', 12746123, 'meowmeow', 50303, 'meowmeoww', '$2b$10$UylUoA84/24yyXkDSKQ21enUZDEEZiGQIV9doPoACJlg2Jiy1inna', 'female', 'peter', 'pan'),
(6, 'dogandcat865@gmail.com', '0000-00-00', 56569090, 'Tampines st 32', 520334, 'victor', '$2b$10$zkypkU0YgcD.sg9AsSe3/utSQs0Od70VkVPzU3DcJMVE1r92bkUbG', 'Male', 'Victor', 'chua'),
(7, 'funnydog865@gmail.com', '0000-00-00', 12341234, 'Tampines st 32', 53123, 'dog', '$2b$10$DSX15LQ4f05C2SafvSe9eOM1cM7d0N1hKfmhk7rd9t6G1KAVzDOdC', 'Male', 'Victor', 'chua'),
(9, 'meowcat865@gmail.com', '2022-01-09', 63359183, 'Tampines st 32', 53123, 'cat123', '$2b$10$PXpuCsSLi9WrMxtx3T3zueUy1vcgB0IBCgo0MDa052xlxu55955b.', 'Male', 'Victor', 'chua'),
(17, 'tissue123@gmail.com', '2022-01-09', 56565240, 'meowmeow', 50303, 'cuteCat', '$2b$10$OmiiR607Oy.YdiwYJYtyOu4BH6ThJgHiGo.YKsUuE/0AH3UcIbCmm', 'female', 'peter', 'pan'),
(19, 'iosrocks@gmail.com', '2022-01-09', 43827471, 'meowmeow', 50303, 'iphoneisbest', '$2b$10$Aw28aPmWyHyVjTPv1SdB5exPgsV3YQNMr9fFbGOtDv.Tv9u5YATPe', 'female', 'peter', 'pan'),
(21, 'android@gmail.com', '2022-01-10', 11111111, 'meowmeow', 50303, 'hihi', '$2b$10$mkhcIDnip9nFK8.5Sy/SlOHe3okg46DFM9/X24aHbjmhP6b949ErK', 'female', 'peter', 'pan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`favouriteID`),
  ADD KEY `CustomerID` (`CustomerID`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`Food_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`Review_ID`),
  ADD KEY `Customer_ID` (`Customer_username`),
  ADD KEY `food_id` (`RestaurantID`);

--
-- Indexes for table `user_database`
--
ALTER TABLE `user_database`
  ADD PRIMARY KEY (`CustomerID`),
  ADD UNIQUE KEY `Email_UNIQUE` (`Email`),
  ADD UNIQUE KEY `Username_UNIQUE` (`Username`),
  ADD UNIQUE KEY `Contact_Number_UNIQUE` (`Contact_Number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `favouriteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `Food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `Review_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `user_database`
--
ALTER TABLE `user_database`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favourite`
--
ALTER TABLE `favourite`
  ADD CONSTRAINT `CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `user_database` (`CustomerID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `food_id` FOREIGN KEY (`RestaurantID`) REFERENCES `food` (`Food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
