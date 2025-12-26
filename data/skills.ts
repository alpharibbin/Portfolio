export interface Skill {
  name: string
  level: number
  category: "language" | "tool" | "protocol" | "hardware"
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "C", level: 90, category: "language" },
  { name: "C++", level: 85, category: "language" },
  { name: "Python", level: 80, category: "language" },

  // Tools & IDEs
  { name: "KiCAD", level: 95, category: "tool" },
  { name: "Altium Designer", level: 90, category: "tool" },
  { name: "Arduino IDE", level: 85, category: "tool" },

  // Microcontrollers
  { name: "ATmega328P", level: 95, category: "hardware" },
  { name: "ATmega2560", level: 90, category: "hardware" },
  { name: "ESP-32", level: 85, category: "hardware" },
  { name: "ESP-8266", level: 85, category: "hardware" },
  { name: "STM32", level: 65, category: "hardware" },

  // Communication Protocols
  { name: "SPI", level: 90, category: "protocol" },
  { name: "UART", level: 95, category: "protocol" },
  { name: "I2C", level: 90, category: "protocol" },
  { name: "CAN", level: 80, category: "protocol" },
  { name: "PCI-Express", level: 75, category: "protocol" },
  { name: "USB", level: 85, category: "protocol" },

  // Hardware Design Skills
  { name: "Schematic Design", level: 90, category: "tool" },
  { name: "Multi-Layer PCB Layout", level: 95, category: "tool" },
  { name: "Component Selection", level: 90, category: "tool" },
  { name: "Layout Optimization", level: 85, category: "tool" },

  // Core Embedded Skills
  { name: "Embedded Firmware Development", level: 90, category: "tool" },
  { name: "Sensor Interfacing", level: 85, category: "tool" },
  { name: "Ethernet Communication (W5500)", level: 80, category: "tool" },
  { name: "mmWave Radar Integration", level: 75, category: "tool" },
]