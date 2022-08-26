export function getRobot(robotId: string) {
  switch (robotId) {
    default:
    case "onrobot-rg2":
      return {
        name: "OnRobot RG2",
        variants: {
          ur: {
            name: "Universal Robots Kit",
            price: { value: 4534, currency: "€", vat: false },
          },
          omron: {
            name: "Omron Kit",
            price: { value: 5216, currency: "€", vat: false },
          },
          kassow: {
            name: "Kassow Kit",
            price: { value: 4534, currency: "€", vat: false },
          },
          hanwha: {
            name: "Hanwha Kit",
            price: { value: 5216, currency: "€", vat: false },
          },
          doosan: {
            name: "Doosan Kit",
            price: { value: 5216, currency: "€", vat: false },
          },
          denso: {
            name: "Denso Kit",
            price: { value: 5216, currency: "€", vat: false },
          },
          abb: {
            name: "Denso Kit",
            price: { value: 5216, currency: "€", vat: false },
          },
          gripper: {
            name: "Gripper (no accessories)",
            price: { value: 4019, currency: "€", vat: false },
          },
        },
        features: [
          [
            "Large stroke",
            "Automatically detects the stroke at program start without initialization. The maximum grip stroke of the RG2 is 110 mm (adjustable).",
          ],

          [
            "Handle display",
            'Automatic "lost grip detection", "grip detected", "continuous grip" and "measure width" detections remove the need for manually programming these features.',
          ],

          [
            "Customizable fingertips",
            "The fingertips of the gripper can be easily customized, fitting the product shape for stable gripping.",
          ],

          [
            "Automatic Tool Center Point Calculation (TCP)",
            "Automatic calculation of TCP eliminates the need for extensive programming in addition to reducing the deployment time.",
          ],

          [
            "Automatic payload calculation",
            "Automatic payload calculations simplify the programming of the RG2 gripper.",
          ],

          [
            "Automatic depth compensation",
            "Automatic depth compensation ensures the gripper’s fingers sweep in parallel across work surfaces.",
          ],

          [
            "Integrated Software",
            "The gripper comes with pre-integrated software that is easy to install and program, so even employees with no technical background can set it up.",
          ],

          [
            "TÜV-certified",
            "Both the RG2 gripper and the RG6 gripper are TÜV certified.",
          ],

          [
            "High flexibility",
            "Ready-to-use, customizable solution. Use one tool for various applications",
          ],
        ],
        specs: {
          overview: {
            title: "Overview",
            entries: {
              payload: { name: "Payload", value: "2kg" },
              weight: { name: "Weight", value: "0.78kg" },
              dim: { name: "Dimension", value: "213 x 149 x 36mm" },
              numOfFingers: { name: "Number of Fingers", value: "2" },
              mode: { name: "Operating Mode", value: "Electric" },
            },
          },
          performance: {
            title: "Performance",
            entries: {
              tempMin: { name: "Operating temperature min", value: "5 °C" },
              tempMax: { name: "Operating temperature max", value: "50 °C" },
              pressure: { name: "Operating pressure", value: "-" },
              pressureMax: { name: "Operating pressure max", value: "-" },
              stroke: { name: "Stroke", value: "110mm" },
              gripForce: { name: "Max. Gripforce", value: "40N" },
              closingTime: { name: "Closing Time", value: "0.21" },
              repeatability: { name: "Repeatability", value: "0.1mm" },
            },
          },
          interfaces: {
            title: "Interfaces",
            entries: {
              voltage: { name: "Supply voltage", value: "24V" },
              currentMax: { name: "Max. current", value: "0.6A" },
              currentNom: { name: "Nominal current", value: "-" },
              communication: {
                name: "Communication",
                value: "digital IOs, Ethernet",
              },
              circuit: { name: "Circuit type", value: "-" },
              interface: {
                name: "Mounting Interface",
                value: "ISO 9409-1-50-4-M6",
              },
              airSupply: { name: "Compressed air supply", value: "-" },
              airConnection: { name: "Compressed air connection", value: "-" },
            },
          },
          properties: {
            title: "Properties",
            entries: {
              ip: { name: "IP classification", value: "IP54" },
            },
          },
        },
        downloads: [
          {
            icon: "/images/rg2_datasheet.jpg",
            title: "OnRobot RG2 datasheet",
            description: "Download the OnRobot RG2 datasheet here!",
          },
          {
            icon: "/images/rg2_step.png",
            title: "STEP file for the OnRobot RG2 Gripper",
            description: "Download the STEP file for the OnRobot RG2 here!",
          },
        ],
        videos: [
          "https://uploads.unchainedrobotics.de/media/file_upload/RG2_RG6_Applications_video_ENG_57e9299d.mp4",
          "https://uploads.unchainedrobotics.de/media/file_upload/RG2_RG6_promotional_video_ENG_07961d3a.mp4",
        ],
        shortDescription:
          "The RG2 – 2kg payload robot arm gripper is a flexible collaborative gripper with built-in Quick Changer and up to 110mm stroke. It provides intelligence, fast deployment, easy customization and programming. The outstanding software features of our one-system solution decrease engineering and manufacturing time significantly. The RG2 gripper is a tool for a wide range of applications. Customized fingertips provide great gripping flexibility, customers can use one tool for different parts of the production process maximizing robot utilization. The RG2 works seamlessly with our Dual Quick Changer and any of our other grippers to help you maximize utilization of your robots.",
        description:
          "The RG2 Gripper helps you get the most out of your robots. The RG2 gripper can be easily combined with the Dual Quick Changer module. The Dual Quick Changer module reduces production time by handling more workpieces simultaneously. This module works on the same principle as the Quick Changer module. However, the Dual Quick Changer is designed to allow the simultaneous use of two gripper tools, e.g., one RG2 gripper and one RG6 gripper in parallel. Adjustable fingertips provide great gripping flexibility: customers can use one tool for different parts of the production process, thereby maximizing robot utilization.\n\nPrice may vary with cobot brand.",
        images: ["/images/rg2_1.jpg", "/images/rg2_2.jpg", "/images/rg2_3.jpg"],
      };
  }
}

export type Robot = {
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  variants: {
    [key: string]: {
      name: string;
      price: { value: number; currency: string; vat: boolean };
    };
  };
  features: string[][];
  specs: {
    [key: string]: {
      title: string;
      entries: {
        [key: string]: {
          name: string;
          value: string;
        };
      };
    };
  };
  downloads: { icon: string; title: string; description: string }[];
  videos: string[];
};
