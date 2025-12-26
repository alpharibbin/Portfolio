export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  technologies: string[]
  imageUrl?: string
  images?: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Automated Petrol Pump System using RFID Technology",
    description: "Contactless fuel dispensing system with RFID authentication and automated tracking",
    longDescription: "Developed a contactless fuel dispensing system using RFID for secure user authentication, improving safety and operational efficiency. Implemented automated fuel tracking and billing operations, reducing manual tasks and minimizing errors, resulting in a 30% improvement in operational efficiency.",
    category: "Embedded Systems",
    technologies: ["RFID", "Embedded C", "Microcontrollers", "Automation"],
    featured: true,
  },
  {
    id: "2",
    title: "GPS Based Blind Stick with Alert System",
    description: "Enhanced smart blind stick with RF-based wireless alerts for obstacle detection",
    longDescription: "Enhanced an existing Smart Blind Stick by integrating an RF module to send real-time alerts when an obstacle is detected. Used an RF transmitter on the stick and a receiver at the user's end for reliable wireless communication. Transmitted signals when the ultrasonic sensor detects obstacles, triggering an alarm for improved user safety.",
    category: "Embedded Systems",
    technologies: ["Ultrasonic Sensor", "RF Module", "Arduino", "Embedded C", "GPS"],
    featured: true,
  },
  {
    id: "3",
    title: "Realtime Smart Blind Stick with Multiple Sensors Ensuring Better Safety",
    description: "Multi-sensor smart navigation aid with obstacle avoidance and GPS tracking",
    longDescription: "Developed a real-time smart blind stick integrating ultrasonic sensors for obstacle detection and avoidance, IR sensors for close-range detection, and a GPS module for real-time location tracking. Programmed embedded firmware to process sensor data and provide GPS location updates for enhanced user safety and navigation.",
    category: "Embedded Systems",
    technologies: ["Ultrasonic Sensor", "IR Sensor", "GPS Module", "Arduino", "Embedded C"],
    featured: true,
  },
  {
    id: "4",
    title: "RF-Controlled Surveillance Rover",
    description: "Semi-autonomous rover with RF manual control and multi-sensor environment monitoring",
    longDescription: "Designed a semi-autonomous surveillance rover with RF-based manual control, enabling directional movement and real-time sensor data collection. Integrated multiple sensors for environment monitoring, supporting both automated and manual modes for flexible surveillance and exploration applications.",
    category: "Robotics",
    technologies: ["RF Communication", "DC Motors", "Sensors", "Embedded C", "Microcontrollers"],
    featured: false,
  },
  {
    id: "5",
    title: "ATMEGA-2560 Custom Board Design with Ethernet Communication",
    description: "Custom controller PCB with integrated W5500 Ethernet for TCP/IP networking",
    longDescription: "Designed a custom ATmega2560-based controller PCB featuring an integrated W5500 Ethernet interface for reliable TCP/IP communication. Implemented and tested client-server communication protocols for real-time data transfer over LAN networks.",
    category: "Hardware Design",
    technologies: ["KiCad", "ATmega2560", "W5500 Ethernet", "PCB Design", "Embedded C"],
    featured: true,
  },
  {
    id: "6",
    title: "Custom Breakout Board for AWR1243 Radar Module with Com Support",
    description: "Breakout PCB for TI mmWave radar with high-speed interfaces and MCU integration",
    longDescription: "Designed a custom breakout PCB for the Texas Instruments AWR1243 mmWave radar transceiver, exposing high-speed RF, power, and digital interfaces for rapid prototyping. Interfaced the radar module with an ATmega2560 (Arduino Mega) for configuration, control, and data management.",
    category: "Hardware Design",
    technologies: ["KiCad", "mmWave Radar", "AWR1243", "ATmega2560", "High-Speed PCB"],
    featured: true,
  },
  {
    id: "7",
    title: "Smart Irrigation System with Mobile App",
    description: "Automated soil moisture-based irrigation with remote monitoring via Android app",
    longDescription: "Built an automated irrigation system using ESP8266 and soil moisture sensors, with water control based on real-time sensor data. Integrated with a custom Android app for remote monitoring and manual override, improving water efficiency and precision farming capabilities.",
    category: "IoT",
    technologies: ["ESP8266", "Soil Moisture Sensor", "Android", "Wi-Fi", "Embedded C"],
    featured: false,
  },
  {
    id: "8",
    title: "Battery Voltage Monitoring System",
    description: "Low-cost battery monitor with OLED display and low-voltage alerts",
    longDescription: "Designed a low-cost solution to monitor battery voltage using voltage divider circuits and Arduino Uno. Displayed live voltage readings on an OLED display with configurable alerts for low battery conditions, ideal for portable electronics.",
    category: "Embedded Systems",
    technologies: ["Arduino Uno", "OLED Display", "Voltage Divider", "Embedded C"],
    featured: false,
  },
]