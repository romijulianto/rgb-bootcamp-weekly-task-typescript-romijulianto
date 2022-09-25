-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Sep 2022 pada 19.24
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinic_management`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `clinics`
--

CREATE TABLE `clinics` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `clinics`
--

INSERT INTO `clinics` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Clinic Bintaro Tangerang', 'Tangerang', '2022-09-25 15:04:17', '2022-09-25 15:13:38'),
(2, 'Clinic Mangga Dua Jakarta', 'DKI Jakarta', '2022-09-25 15:05:34', '2022-09-25 15:05:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_transaction`
--

CREATE TABLE `detail_transaction` (
  `id` int(11) NOT NULL,
  `patient_name` varchar(255) DEFAULT NULL,
  `transac_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `facilityClinicId` int(11) DEFAULT NULL,
  `serviceClinicId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `detail_transaction`
--

INSERT INTO `detail_transaction` (`id`, `patient_name`, `transac_date`, `createdAt`, `updatedAt`, `facilityClinicId`, `serviceClinicId`) VALUES
(1, 'Anggara Ade', '2022-09-26 09:43:11', '2022-09-25 17:21:30', '2022-09-25 17:21:30', 1, 2),
(2, 'Porando Ang', '2022-09-26 09:43:11', '2022-09-25 17:21:49', '2022-09-25 17:21:49', 2, 2),
(3, 'Adnrita Sial', '2022-09-26 09:43:11', '2022-09-25 17:22:04', '2022-09-25 17:22:04', 1, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `facilities`
--

CREATE TABLE `facilities` (
  `id` int(11) NOT NULL,
  `fasilities` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `facilities`
--

INSERT INTO `facilities` (`id`, `fasilities`, `createdAt`, `updatedAt`) VALUES
(1, 'Test Lab', '2022-09-25 15:54:15', '2022-09-25 15:54:15'),
(2, 'Medical Checkup', '2022-09-25 15:54:37', '2022-09-25 15:54:37'),
(3, 'Covid 19', '2022-09-25 15:54:45', '2022-09-25 15:54:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `facility_clinics`
--

CREATE TABLE `facility_clinics` (
  `id` int(11) NOT NULL,
  `facility_clinic_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `facilityId` int(11) DEFAULT NULL,
  `clinicId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `facility_clinics`
--

INSERT INTO `facility_clinics` (`id`, `facility_clinic_name`, `createdAt`, `updatedAt`, `facilityId`, `clinicId`) VALUES
(1, 'Test Lab', '2022-09-25 17:08:28', '2022-09-25 17:08:28', 1, 1),
(2, 'Test Lab', '2022-09-25 17:08:38', '2022-09-25 17:08:38', 1, 2),
(3, 'Medical Checkup', '2022-09-25 17:08:53', '2022-09-25 17:08:53', 2, 1),
(4, 'Medical Checkup', '2022-09-25 17:09:15', '2022-09-25 17:09:15', 2, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `facilityId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id`, `service`, `createdAt`, `updatedAt`, `facilityId`) VALUES
(1, 'Hemotologi', '2022-09-25 16:24:54', '2022-09-25 16:24:54', 1),
(2, 'Koagolasi', '2022-09-25 16:25:30', '2022-09-25 16:25:30', 1),
(3, 'Urin', '2022-09-25 16:25:44', '2022-09-25 16:25:44', 1),
(4, 'Sereologi', '2022-09-25 16:25:50', '2022-09-25 16:25:50', 1),
(5, 'Paket Gold', '2022-09-25 16:26:17', '2022-09-25 16:26:17', 2),
(6, 'Paket Standar', '2022-09-25 16:26:25', '2022-09-25 16:26:25', 2),
(7, 'Paket Kehamilan', '2022-09-25 16:26:31', '2022-09-25 16:26:31', 2),
(8, 'Rapid Test', '2022-09-25 16:26:46', '2022-09-25 16:26:46', 3),
(9, 'Swab Antigen', '2022-09-25 16:26:53', '2022-09-25 16:26:53', 3),
(10, 'Swab PCR', '2022-09-25 16:26:59', '2022-09-25 16:26:59', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `service_clinics`
--

CREATE TABLE `service_clinics` (
  `id` int(11) NOT NULL,
  `service_clinic_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `clinicId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `service_clinics`
--

INSERT INTO `service_clinics` (`id`, `service_clinic_name`, `createdAt`, `updatedAt`, `serviceId`, `clinicId`) VALUES
(1, 'Hematologi', '2022-09-25 16:42:54', '2022-09-25 16:42:54', 1, 1),
(2, 'Koagolasi', '2022-09-25 16:43:11', '2022-09-25 16:43:11', 2, 1),
(3, 'Urin', '2022-09-25 16:43:22', '2022-09-25 16:43:22', 3, 1),
(4, 'Sereologi', '2022-09-25 16:43:34', '2022-09-25 16:43:34', 4, 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `clinics`
--
ALTER TABLE `clinics`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_transaction`
--
ALTER TABLE `detail_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facilityClinicId` (`facilityClinicId`),
  ADD KEY `serviceClinicId` (`serviceClinicId`);

--
-- Indeks untuk tabel `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `facility_clinics`
--
ALTER TABLE `facility_clinics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facilityId` (`facilityId`),
  ADD KEY `clinicId` (`clinicId`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facilityId` (`facilityId`);

--
-- Indeks untuk tabel `service_clinics`
--
ALTER TABLE `service_clinics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `serviceId` (`serviceId`),
  ADD KEY `clinicId` (`clinicId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `clinics`
--
ALTER TABLE `clinics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `detail_transaction`
--
ALTER TABLE `detail_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `facility_clinics`
--
ALTER TABLE `facility_clinics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `service_clinics`
--
ALTER TABLE `service_clinics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `detail_transaction`
--
ALTER TABLE `detail_transaction`
  ADD CONSTRAINT `detail_transaction_ibfk_1` FOREIGN KEY (`facilityClinicId`) REFERENCES `facility_clinics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `detail_transaction_ibfk_2` FOREIGN KEY (`serviceClinicId`) REFERENCES `service_clinics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `facility_clinics`
--
ALTER TABLE `facility_clinics`
  ADD CONSTRAINT `facility_clinics_ibfk_1` FOREIGN KEY (`facilityId`) REFERENCES `facilities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `facility_clinics_ibfk_2` FOREIGN KEY (`clinicId`) REFERENCES `clinics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`facilityId`) REFERENCES `facilities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `service_clinics`
--
ALTER TABLE `service_clinics`
  ADD CONSTRAINT `service_clinics_ibfk_1` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `service_clinics_ibfk_2` FOREIGN KEY (`clinicId`) REFERENCES `clinics` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
