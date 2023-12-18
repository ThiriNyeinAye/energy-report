TRUNCATE `energy_consumptions`;INSERT INTO `energy_consumptions` (`id`, `energy_meter`, `createdAt`, `updatedAt`) VALUES 
('1', '15', '2023-12-16 10:37:09', '2023-12-16 10:37:09'), 
('2', '10', '2023-12-16 11:37:09', '2023-12-16 11:37:09'),
('3', '15', '2023-12-16 12:37:09', '2023-12-16 12:37:09'),
('4', '20', '2023-12-16 13:37:09', '2023-12-16 13:37:09'),
('5', '25', '2023-12-16 14:37:09', '2023-12-16 14:37:09'),
('6', '30', '2023-12-16 15:37:09', '2023-12-16 15:37:09'),
('7', '80', '2023-12-16 16:37:09', '2023-12-16 16:37:09'),
('8', '15', '2023-12-16 17:37:09', '2023-12-16 10:37:09'), 
('9', '10', '2023-12-16 18:37:09', '2023-12-16 11:37:09'),
('10', '15', '2023-12-16 19:37:09', '2023-12-16 12:37:09'),
('11', '20','2023-12-16 20:37:09', '2023-12-16 13:37:09'),
('12', '25','2023-12-16 21:37:09', '2023-12-16 14:37:09'),
('13', '30', '2023-12-16 22:37:09', '2023-12-16 15:37:09'),
('14', '80', '2023-12-16 23:37:09', '2023-12-16 16:37:09'),
('15', '15', '2023-06-18 00:37:09', '2023-12-16 10:37:09'), 
('16', '10', '2023-06-18 01:37:09', '2023-12-16 11:37:09'),
('17', '15', '2023-06-18 22:37:09', '2023-12-16 12:37:09'),
('18', '20', '2023-06-18 03:37:09', '2023-12-16 13:37:09'),
('19', '25', '2023-06-18 04:37:09', '2023-12-16 14:37:09'),
('20', '30', '2023-06-18 05:37:09', '2023-12-16 15:37:09'),
('21', '80', '2023-06-18 06:37:09', '2023-12-16 16:37:09'),
('22', '25', '2023-06-18 07:37:09', '2023-12-16 14:37:09'),
('23', '30', '2023-06-18 08:37:09', '2023-12-16 15:37:09'),
('24', '80', '2023-06-18 09:37:09', '2023-12-16 16:37:09');
TRUNCATE `carbon_footprints`;INSERT INTO `carbon_footprints` VALUES 
(1,1.15,'2023-12-16 10:05:10','2023-12-16 10:05:10'),
(2,1.18,'2023-12-16 10:05:10','2023-12-16 10:05:10');
(2,2.00,'2023-12-16 10:05:10','2023-12-16 10:05:10');
TRUNCATE `electricity-usages`;INSERT INTO `electricity_usages` VALUES 
(1,1,'kWh',NULL,'2023-12-16 11:05:10','2023-12-16 11:05:10');
TRUNCATE `water_usages`;INSERT INTO `water_usages` VALUES 
(1,0.58,'m','2023-12-16 09:00:00','2023-12-16 19:00:00'),
(2,0.58,'m','2023-12-16 19:00:00','2023-12-16 10:00:00'),
(3,0.58,'m','2023-12-16 19:00:00','2023-12-16 11:00:00'),
(4,0.58,'m','2023-12-16 19:00:00','2023-12-16 12:00:00'),
(5,0.58,'m','2023-12-16 19:00:00','2023-12-16 13:00:00'),
(6,0.58,'m','2023-12-16 09:00:00','2023-12-16 19:00:00'),
(7,0.58,'m','2023-12-16 19:00:00','2023-12-16 10:00:00'),
(8,0.58,'m','2023-12-16 19:00:00','2023-12-16 11:00:00'),
(9,0.58,'m','2023-12-16 19:00:00','2023-12-16 12:00:00'),
(11,0.58,'m','2023-12-16 09:00:00','2023-12-16 19:00:00'),
(12,0.58,'m','2023-12-16 19:00:00','2023-12-16 10:00:00'),
(13,0.58,'m','2023-12-16 19:00:00','2023-12-16 11:00:00'),
(14,0.58,'m','2023-12-16 19:00:00','2023-12-16 12:00:00'),
(15,0.58,'m','2023-12-16 19:00:00','2023-12-16 13:00:00'),
(16,0.58,'m','2023-12-16 09:00:00','2023-12-16 19:00:00'),
(17,0.58,'m','2023-12-16 19:00:00','2023-12-16 10:00:00'),
(18,0.58,'m','2023-12-16 19:00:00','2023-12-16 11:00:00'),
(19,0.58,'m','2023-12-16 19:00:00','2023-12-16 12:00:00'),
(20,0.58,'m','2023-12-16 19:00:00','2023-12-16 13:00:00'),
(21,0.58,'m','2023-12-16 19:00:00','2023-12-16 10:00:00'),
(22,0.58,'m','2023-12-16 19:00:00','2023-12-16 11:00:00'),
(23,0.58,'m','2023-12-16 19:00:00','2023-12-16 12:00:00'),
(24,0.58,'m','2023-12-16 19:00:00','2023-12-16 13:00:00');
TRUNCATE `recycles`;
INSERT INTO `recycles` (`id`, `recycle`, `non_recycle`, `createdAt`, `updatedAt`) VALUES 
('1', '4000', '4500', '2023-12-16 19:54:27', '2023-12-16 19:54:27'),
('2', '2000', '2000', '2023-12-16 19:54:27', '2023-12-16 19:54:27'),
('3', '1800', '1900', '2023-12-16 19:54:27', '2023-12-16 19:54:27'),
('4', '3700', '3750', '2023-12-16 19:54:27', '2023-12-16 19:54:27'),
('5', '1000', '1100', '2023-12-16 19:54:27', '2023-12-16 19:54:27');
TRUNCATE `abnormalities`; INSERT INTO `abnormalities` VALUES 
(1,'Laptop Charger','Plug Closed','Online','2023-12-16 12:05:01','2023-12-16 12:05:01'),
(2,'Laptop Charger','Plug Closed','Online','2023-12-16 12:05:01','2023-12-16 12:05:01'),
(3,'Laptop Charger','Plug Open','Online','2023-12-16 12:05:01','2023-12-16 12:05:01'),
(4,'Laptop Charger','Plug Open','Online','2023-12-16 12:05:01','2023-12-16 12:05:01'),
(5,'Laptop Charger','Plug Open','Online','2023-12-16 12:05:01','2023-12-16 12:05:01');