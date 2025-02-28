/*
 * @Author: Ender-Wiggin
 * @Date: 2024-10-22 00:01:17
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2025-03-01 02:38:38
 * @Description:
 */
// import {Size} from "@/types/Size";

import BaseCard from '@/types/BaseCard';
import { EResource, ESector } from '@/types/element';
const _baseCards: BaseCard[] = [
  {
    id: '39',
    name: '61 Virginis Observation',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 0 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CARD,
  },
  {
    id: '128',
    name: 'Advanced Navigation System',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 1 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '136',
    name: 'Algonquin Radio Observatory',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 2 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '64',
    name: 'ALICE',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 3 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.CREDIT,
  },
  {
    id: '45',
    name: 'Allen Telescope Array',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 4 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CARD,
  },
  {
    id: '46',
    name: 'ALMA Observatory',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 5 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '122',
    name: 'Amateur Astronomers',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 6 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLACK,
    price: 2,
    income: EResource.ENERGY,
  },
  {
    id: '97',
    name: 'Apollo 1 Mission',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 7 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '55',
    name: 'Arecibo Observatory',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 8 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.CARD,
  },
  {
    id: '129',
    name: 'Asteroids Research',
    position: { src: '/images/cards/cards-1.webp', row: 0, col: 9 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 0,
    income: EResource.ENERGY,
  },
  {
    id: '123',
    name: 'Asteroids Flyby',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 0 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 0,
    income: EResource.CARD,
  },
  {
    id: '70',
    name: 'ATLAS',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 1 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.CREDIT,
  },
  {
    id: '15',
    name: 'Atmospheric Entry',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 2 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '38',
    name: "Barnard's Star Observation",
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.ENERGY,
  },
  {
    id: '43',
    name: 'Beta Pictoris Observation',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 4 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '56',
    name: 'Breakthrough Listen',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '48',
    name: 'Breakthrough Starshot',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 6 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '49',
    name: 'Breakthrough Watch',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '115',
    name: 'Canadian Hydrogen Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 8 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '80',
    name: 'Cape Canaveral SFS',
    position: { src: '/images/cards/cards-1.webp', row: 1, col: 9 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLACK,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '8',
    name: 'Cassini Probe',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 0 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '88',
    name: 'Chandra Space Observatory',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 1 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.ENERGY,
  },
  {
    id: '73',
    name: 'Clean Space Initiative',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '124',
    name: 'Cometary Encounter',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '116',
    name: 'Control Center',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 4 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLACK,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '138',
    name: 'Cornell University',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '98',
    name: 'Coronal Spectrograph',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 6 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '53',
    name: 'Deep Synoptic Array',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 7 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.ENERGY,
  },
  {
    id: '16',
    name: 'Dragonfly',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 8 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '68',
    name: 'DUNE',
    position: { src: '/images/cards/cards-1.webp', row: 2, col: 9 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.CREDIT,
  },
  {
    id: '57',
    name: 'Effelsberg Telescope Construction',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 0 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '99',
    name: 'Electron Microscope',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 1 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '126',
    name: 'Euclid Telescope Construction',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.CARD,
  },
  {
    id: '12',
    name: 'Europa Clipper',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLACK,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '100',
    name: 'Exascale Supercomputer',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 4 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '75',
    name: 'Extremophiles Study',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 5 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLACK,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '9',
    name: 'Falcon Heavy',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 6 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.CREDIT,
  },
  {
    id: '65',
    name: 'FAST Telescope Construction',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 7 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLACK,
    price: 4,
    income: EResource.CREDIT,
  },
  {
    id: '107',
    name: 'First Black Hole Photo',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 8 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.ENERGY,
  },
  {
    id: '71',
    name: 'Focused Research',
    position: { src: '/images/cards/cards-1.webp', row: 3, col: 9 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.CREDIT,
  },
  {
    id: '90',
    name: 'Fuel Tanks Construction',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 0 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '91',
    name: 'Fusion Reactor',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 1 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '121',
    name: 'Future Circular Collider',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 2 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 7,
    income: EResource.ENERGY,
  },
  {
    id: '4',
    name: 'Galileo Mission',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 3 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 0,
    income: EResource.CARD,
  },
  {
    id: '86',
    name: 'Giant Magellan Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 4 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '66',
    name: 'GMRT Telescope Construction',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.CARD,
  },
  {
    id: '93',
    name: 'Government Funding',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 6 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '11',
    name: 'Grant',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '19',
    name: 'Gravitational Slingshot',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 8 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
  },
  {
    id: '30',
    name: 'Great Observatories Project',
    position: { src: '/images/cards/cards-1.webp', row: 4, col: 9 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CARD,
  },
  {
    id: '105',
    name: 'Green Bank Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 0 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLACK,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '18',
    name: 'Hayabusa',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 1 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLACK,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '134',
    name: 'Herschel Space Observatory',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 2 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '27',
    name: 'Hubble Space Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CARD,
  },
  {
    id: '81',
    name: 'International Collaboration',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 4 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CARD,
  },
  {
    id: '59',
    name: 'Ion Propulsion System',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.CARD,
  },
  {
    id: '79',
    name: 'ISS',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 6 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '29',
    name: 'James Webb Space Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.ENERGY,
  },
  {
    id: '82',
    name: 'Johnson Space Center',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 8 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '6',
    name: 'Juno Probe',
    position: { src: '/images/cards/cards-1.webp', row: 5, col: 9 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '35',
    name: 'Jupiter Exploration Program',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 0 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '23',
    name: 'Jupiter Flyby',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 1 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '40',
    name: 'Kepler 22 Observation',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '28',
    name: 'Kepler Space Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '69',
    name: 'Large Hadron Collider',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 4 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLACK,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '25',
    name: 'Lightsail',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '102',
    name: 'Linguistic Analysis',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 6 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CREDIT,
  },
  {
    id: '51',
    name: 'Lovell Telescope',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 7 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.ENERGY,
  },
  {
    id: '130',
    name: 'Low-Cost Space Launch',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 8 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.ENERGY,
  },
  {
    id: '109',
    name: 'Low-Power Microprocessors',
    position: { src: '/images/cards/cards-1.webp', row: 6, col: 9 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.CARD,
  },
  {
    id: '2',
    name: 'Mariner 10 Mission',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 0 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 0,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '34',
    name: 'Mars Exploration Program',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 1 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '22',
    name: 'Mars Flyby',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 2 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '14',
    name: 'Mars Science Laboratory',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 3 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '32',
    name: 'Mercury Exploration Program',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 4 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '20',
    name: 'Mercury Flyby',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '7',
    name: 'MESSENGER Probe',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 6 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '77',
    name: 'NASA Astrobiology Institute',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '92',
    name: 'NASA Image of the Day',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 8 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '76',
    name: 'NASA Research Center',
    position: { src: '/images/cards/cards-2.webp', row: 0, col: 9 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '95',
    name: 'Near-Earth Asteroids Survey',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 0 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '127',
    name: 'NEAR Shoemaker',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 1 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '89',
    name: 'NIAC Program',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '135',
    name: 'Noto Radio Observatory',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 3 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '10',
    name: 'ODINUS Mission',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 4 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLACK,
    price: 3,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '62',
    name: 'Onsala Telescope Constructior',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 5 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '133',
    name: 'Optimal Launch Window',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 6 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '120',
    name: 'Orbiting Lagrange Point',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 7 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLACK,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '17',
    name: 'OSIRIS-REx',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 8 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '52',
    name: 'Parkes Observatory',
    position: { src: '/images/cards/cards-2.webp', row: 1, col: 9 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '13',
    name: 'Perseverance Rover',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 0 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '1',
    name: 'Pioneer 11 Mission',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 1 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 0,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '119',
    name: 'PIXL',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 2 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '114',
    name: 'Planet Hunters',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '112',
    name: 'Planetary Geologic Mapping',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 4 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '118',
    name: 'PLATO',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 5 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '94',
    name: 'Popularization of Science',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 6 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '74',
    name: 'Pre-launch Testing',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '110',
    name: 'Press Statement',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 8 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '42',
    name: 'Procyon Observation',
    position: { src: '/images/cards/cards-2.webp', row: 2, col: 9 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '87',
    name: 'Project Longshot',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 0 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '37',
    name: 'Proxima Centauri Observation',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 1 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '61',
    name: 'Quantum Computer',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLACK,
    price: 3,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '111',
    name: 'Roman Space Telescope',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 3 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 3,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '104',
    name: 'Rosetta Probe',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 4 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '84',
    name: 'Sample Return',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '36',
    name: 'Saturn Exploration Program',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 6 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '24',
    name: 'Saturn Flyby',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 7 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '72',
    name: 'Scientific Cooperation',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 8 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '137',
    name: 'SETI Data Archive',
    position: { src: '/images/cards/cards-2.webp', row: 3, col: 9 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLACK,
    price: 1,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '78',
    name: 'SETI Institute',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 0 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '108',
    name: 'SETI@Home',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 1 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLACK,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '63',
    name: 'SHERLOC',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 2 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '41',
    name: 'Sirius A Observation',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 3 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '113',
    name: 'Solvay Conference',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 4 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '31',
    name: 'Space Launch System',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 5 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '132',
    name: 'Space Shuttle',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 6 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLACK,
    price: 3,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '50',
    name: 'Square Kilometre Array',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '85',
    name: 'Starship',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 8 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 4,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '106',
    name: 'Strategic Planning',
    position: { src: '/images/cards/cards-2.webp', row: 4, col: 9 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '96',
    name: 'Tardigrades Study',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 0 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '131',
    name: 'Telescope Modernization',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 1 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '101',
    name: 'Telescope Time Allocation',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '26',
    name: 'Through the Asteroid Belt',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 3 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '125',
    name: 'Trajectory Correction',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 4 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.BLUE,
    price: 1,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '60',
    name: 'Trident Probe',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 5 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '58',
    name: 'Uranus Orbiter and Probe',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 6 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '44',
    name: 'Vega Observation',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 7 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.RED,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '5',
    name: 'Venera Probe',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 8 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '33',
    name: 'Venus Exploration Program',
    position: { src: '/images/cards/cards-2.webp', row: 5, col: 9 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '21',
    name: 'Venus Flyby',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 0 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 1,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '54',
    name: 'VERITAS Telescopes',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 1 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.RED,
    price: 2,
    income: EResource.CREDIT,
    description: '',
  },
  {
    id: '47',
    name: 'Very Large Array',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 2 },
    freeAction: [{ type: EResource.PUBLICITY, value: 1 }],
    sector: ESector.YELLOW,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '3',
    name: 'Voyager 2 Mission',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 3 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.YELLOW,
    price: 0,
    income: EResource.CARD,
    description: '',
  },
  {
    id: '103',
    name: 'Westerbork Synthesis Radio Telescope',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 4 },
    freeAction: [{ type: EResource.DATA, value: 1 }],
    sector: ESector.YELLOW,
    price: 3,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '83',
    name: 'Wow! Signal',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 5 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 2,
    income: EResource.ENERGY,
    description: '',
  },
  {
    id: '67',
    name: 'Yevpatoria Telescope Construction',
    position: { src: '/images/cards/cards-2.webp', row: 6, col: 6 },
    freeAction: [{ type: EResource.MOVE, value: 1 }],
    sector: ESector.BLUE,
    price: 3,
    income: EResource.CARD,
    description: '',
  },
];

// add flavorText
export const baseCards: BaseCard[] = _baseCards.map(card => {
  return {
    ...card,
    flavorText: `${card.id}_flavor_text`,
  };
})

// export const baseCards: BaseCard[] = [
//     {
//       id: '39',
//       name: '61 Virginis Observation',
//       position: { src: '/images/cards/cards-1.webp', row: 0, col: 0 },
//       freeAction: [{ type: EResource.MOVE, value: 1 }],
//       sector: ESector.BLUE,
//       price: 2,
//       income: EResource.CARD,
//     },
//   ];
// console.log((baseCards.map(c => c.name)).join(','));
export default baseCards;
