import {
    ATTR_ARMORED,
    ATTR_BIOLOGICAL,
    ATTR_DETECTOR,
    ATTR_LIGHT,
    ATTR_MASSIVE,
    ATTR_MECHANICAL,
    ATTR_PSIONIC,
    GATEWAY,
    HATCHERY,
    KEY_A,
    KEY_B,
    KEY_C,
    KEY_D,
    KEY_E,
    KEY_H,
    KEY_I,
    KEY_M,
    KEY_Q,
    KEY_R,
    KEY_S,
    KEY_T,
    KEY_V,
    KEY_X,
    KEY_Z,
    NEXUS,
    ROBOTICS,
    STARGATE,
} from '../../model/const';
import { SC2Source } from '../../model/sc2source';
import {
    SC2Attack,
    SC2Defence,
    SC2Energy,
    SC2OtherInfo,
    SC2Target,
    SC2UnitInformation,
} from '../../model/sc2unitinformation';
import { SC2Asset } from '../../model/sc2asset';
import { SC2Cost } from '../../model/sc2cost';
import { SC2Unit } from "../../model/sc2unit";
import { PROTOSS_RACE, SC2_RACES, TERRAN_RACE, ZERG_RACE } from '../races/races';

export const SC2_UNITS = [
    new SC2Unit(
        '40afdbd9-9b18-455d-9b54-d55c568685ec',
        'Probe',
        PROTOSS_RACE,
        'The Probe is the Protoss worker unit, warped in at the Nexus. ' +
        'It harvests resources, has a low-powered melee attack, and can ' +
        'warp-in any Protoss building.',
        new SC2Cost(50, 0, 12, 1),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_MECHANICAL],
            new SC2Attack(5, 4.67, 1.07, 0.1),
            new SC2Defence(20, 20, 0),
            new SC2OtherInfo(null, 3.94, 8, 1)
        ),
        null,
        new SC2Source(NEXUS, KEY_E),
        new SC2Asset('assets/units/protoss/thumbnail/probe.png', 'assets/units/protoss/image/probe.jpg')
    ),
    new SC2Unit(
        '99eb6ce7-b9d7-401a-ae87-69d4a7317b8a',
        'Zealot',
        PROTOSS_RACE,
        'The first and strongest unit of direct army attacks. ' +
        'A strong brute-force unit and excellent mineral dump as well.',
        new SC2Cost(100, 0, 27, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_MECHANICAL],
            new SC2Attack(8, 18.6, 0.86, 0.1),
            new SC2Defence(100, 50, 1),
            new SC2OtherInfo(null, 3.15, 9, 2)
        ),
        null,
        new SC2Source(GATEWAY, KEY_Z),
        new SC2Asset('assets/units/protoss/thumbnail/zealot.png', 'assets/units/protoss/image/zealot.jpg')
    ),
    new SC2Unit(
        '51365784-a83d-4b13-b201-cc9b47832665',
        'Stalker',
        PROTOSS_RACE,
        'The Stalker is a fast-moving, ranged Protoss ground unit, ' +
        'capable of hitting both air and ground targets. ' +
        'They are warped in at the Gateway, and require a Cybernetics Core.',
        new SC2Cost(125, 50, 30, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_ARMORED, ATTR_MECHANICAL],
            new SC2Attack(10, 9.7, 1.03, 6),
            new SC2Defence(80, 80, 1),
            new SC2OtherInfo(null, 4.13, 10, 2)
        ),
        null,
        new SC2Source(GATEWAY, KEY_H),
        new SC2Asset('assets/units/protoss/thumbnail/stalker.png', 'assets/units/protoss/image/stalker.jpg')
    ),
    new SC2Unit(
        '28441b26-4967-4349-9f14-8dbaabcf0086',
        'Sentry',
        PROTOSS_RACE,
        'The Sentry is an unusual Protoss spell-casting unit produced from the ' +
        'Gateway after the Cybernetics Core has been built. The Sentry\'s spells ' +
        'are very powerful: Force Field, Guardian Shield, and Hallucination. ' +
        'These spells — Force Field in particular - are considered essential ' +
        'capabilities in almost all Protoss strategies.',
        new SC2Cost(50, 100, 26, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_PSIONIC],
            new SC2Attack(8, 18.6, 0.86, 0.1),
            new SC2Defence(100, 50, 1),
            new SC2OtherInfo(new SC2Energy(50, 200), 3.15, 10, 2)
        ),
        null,
        new SC2Source(GATEWAY, KEY_E),
        new SC2Asset('assets/units/protoss/thumbnail/sentry.png', 'assets/units/protoss/image/sentry.jpg')
    ),
    new SC2Unit('10efe000-4a8b-42cd-a59f-419a1923ce5e',
        'Adept',
        PROTOSS_RACE,
        'The Adept is a ranged Protoss ground unit with a ground-only ' +
        'attack, which is warped in at the Gateway.',
        new SC2Cost(100, 25, 27, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_BIOLOGICAL],
            new SC2Attack(10, 6.2, 1.61, 4),
            new SC2Defence(70, 70, 1),
            new SC2OtherInfo(null, 3.5, 9, 2)
        ),
        null,
        new SC2Source(GATEWAY, KEY_H),
        new SC2Asset('assets/units/protoss/thumbnail/adept.png', 'assets/units/protoss/image/adept.png')
    ),
    new SC2Unit(
        'fa2fdf4c-68c0-4e7f-b484-65f03fb93582',
        'High Templar',
        PROTOSS_RACE,
        'The High Templar (often abbreviated to HT) is a spell-casting unit for the Protoss. ' +
        'The High Templar is warped in from a Gateway, with the Templar Archives as a prerequisite. ' +
        'High Templar can cast Feedback to damage and drain the energy of enemy ' +
        'spellcasters. After an upgrade, High Templar can cast the devastating Psionic ' +
        'Storm spell, wreaking damage to all units in an area of effect. Finally, ' +
        'any two High Templar and/or Dark Templar can merge to form an Archon.',
        new SC2Cost(50, 150, 39, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_BIOLOGICAL, ATTR_PSIONIC],
            null,
            new SC2Defence(40, 40, 0),
            new SC2OtherInfo(new SC2Energy(50, 200), 2.62, 10, 2)
        ),
        null,
        new SC2Source(GATEWAY, KEY_T),
        new SC2Asset('assets/units/protoss/thumbnail/high-templar.png', 'assets/units/protoss/image/high-templar.jpg')
    ),
    new SC2Unit(
        'b12440c6-dfd8-4ee8-b6ec-4fa377153d4b',
        'Dark Templar',
        PROTOSS_RACE,
        'The Dark Templar (often abbreviated to DT) is a permanently cloaked ' +
        'Protoss assassin and a huge disruption to most standard builds for ' +
        'both sides. Dark Templar are warped-in at the Gateway after a Dark Shrine is built.',
        new SC2Cost(125, 125, 39, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_BIOLOGICAL, ATTR_PSIONIC],
            new SC2Attack(45, 37.2, 1.21, 0.1),
            new SC2Defence(40, 80, 1),
            new SC2OtherInfo(null, 3.94, 8, 2)
        ),
        null,
        new SC2Source(GATEWAY, KEY_D),
        new SC2Asset('assets/units/protoss/thumbnail/dark-templar.png', 'assets/units/protoss/image/dark-templar.jpg')
    ),
    new SC2Unit(
        '3a9fac08-2181-46d8-bedd-cd593e1f11cd',
        'Immortal',
        PROTOSS_RACE,
        'The Immortal is a powerful, ranged, mechanized assault strider for the Protoss' +
        'army, produced at the Robotics Facility. Their Barrier ability makes them ' +
        'specialists at dealing with any high-powered armored unit whose attack deals ' +
        'a large amount of damage such as Siege Tanks, Ultralisks, or Marauders.',
        new SC2Cost(250, 100, 39, 4),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_ARMORED, ATTR_MECHANICAL],
            new SC2Attack(20, 19.2, 1.04, 6),
            new SC2Defence(200, 100, 1),
            new SC2OtherInfo(null, 3.15, 9, 4)
        ),
        null,
        new SC2Source(ROBOTICS, KEY_I),
        new SC2Asset('assets/units/protoss/thumbnail/immortal.png', 'assets/units/protoss/image/immortal.jpg')
    ),
    new SC2Unit(
        'd2aba0bd-4644-4858-b235-db41f5bb5bab',
        'Colossus',
        PROTOSS_RACE,
        'The Colossus is a massive Protoss battle strider that towers ' +
        'over all other ground units on the battlefield.',
        new SC2Cost(300, 200, 54, 6),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
            new SC2Attack(12, 22.4, 1.07, 6),
            new SC2Defence(200, 150, 1),
            new SC2OtherInfo(null, 3.15, 10, 8)
        ),
        null,
        new SC2Source(ROBOTICS, KEY_C),
        new SC2Asset('assets/units/protoss/thumbnail/colossus.png', 'assets/units/protoss/image/colossus.jpg')
    ),
    new SC2Unit(
        'dd04db1e-92e5-4310-94ac-920f52ac069c',
        'Disruptor',
        PROTOSS_RACE,
        'The Disruptor is a robotic disruption unit. The Disruptor is extremely potent ' +
        'versus any force that clumps its units together, as well as against worker lines.',
        new SC2Cost(150, 150, 36, 3),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_ARMORED, ATTR_MECHANICAL],
            null,
            new SC2Defence(100, 100, 1),
            new SC2OtherInfo(null, 3.15, 9, 4)
        ),
        null,
        new SC2Source(ROBOTICS, KEY_D),
        new SC2Asset('assets/units/protoss/thumbnail/disruptor.png', 'assets/units/protoss/image/disruptor.png')
    ),
    new SC2Unit(
        '2a1a54cc-0d57-4a7c-a6eb-f411c7ae2d2e',
        'Archon',
        PROTOSS_RACE,
        'The Archon is a powerful Protoss short-range unit. It excels against ' +
        'biological units and structures. An Archon is created when two of either ' +
        'Dark Templar or High Templar merge together on the battlefield; ' +
        'the Archon cannot be produced at any building. Archons can attack air ' +
        'or ground units and deal area-of-effect damage.',
        new SC2Cost(0, 0, 9, 4),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_PSIONIC, ATTR_MASSIVE],
            new SC2Attack(25, 20, 1.25, 3),
            new SC2Defence(10, 350, 0),
            new SC2OtherInfo(null, 3.94, 9, 4)
        ),
        null,
        null,
        new SC2Asset('assets/units/protoss/thumbnail/archon.png', 'assets/units/protoss/image/archon.jpg')
    ),
    new SC2Unit(
        '16a3798f-f30d-4514-abc8-2baae2373318',
        'Observer',
        PROTOSS_RACE,
        'The Observer is a flying cloaked spy drone and Detector for the Protoss, ' +
        'built at the Robotics Facility. It is permanently cloaked, so opponents ' +
        'need detection in order to see and kill the Observer.',
        new SC2Cost(25, 75, 21, 1),
        new SC2UnitInformation(
            new SC2Target(false, false),
            [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_DETECTOR],
            null,
            new SC2Defence(40, 20, 0),
            new SC2OtherInfo(null, 2.62, 11, null)
        ),
        null,
        new SC2Source(ROBOTICS, KEY_B),
        new SC2Asset('assets/units/protoss/thumbnail/observer.png', 'assets/units/protoss/image/observer.jpg')
    ),
    new SC2Unit(
        'c7963890-f3b2-46e6-b86d-8ae1668d2ade',
        'Warp Prism',
        PROTOSS_RACE,
        'The Warp Prism is a Protoss transport unit, produced at the Robotics Facility. In Legacy of the ' +
        'Void, it can pickup units from a larger distance (6 range away). The Warp Prism can shuttle up ' +
        'to eight cargo of Protoss units while in Transport Mode (see table below). Unlike other transports, ' +
        'the Warp Prism can convert to Phasing Mode, which renders it stationary while it provides the ' +
        'Psionic Matrix in an area around it. This allows units from Warp Gates to warp in around ' +
        'the Warp Prism, and it can even allow buildings to be powered or warped in without ' +
        'the need for a nearby Pylon.',
        new SC2Cost(200, 0, 36, 2),
        new SC2UnitInformation(
            new SC2Target(false, false),
            [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_PSIONIC],
            null,
            new SC2Defence(80, 100, 0),
            // TODO: Add cargo capacity
            // Cargo capacity: 8
            new SC2OtherInfo(null, 4.13, 10, null)
        ),
        null,
        new SC2Source(ROBOTICS, KEY_A),
        new SC2Asset('assets/units/protoss/thumbnail/warp-prism.png', 'assets/units/protoss/image/warp-prism.jpg')
    ),
    new SC2Unit(
        '448cd045-653c-43e9-936a-3878141aa4a8',
        'Phoenix',
        PROTOSS_RACE,
        'The Phoenix is a speedy Protoss air-to-air fighter, which warps in at ' +
        'the Stargate. Phoenixes can attack other air units while moving, granting ' +
        'an upper hand against enemy air units that rely on hit and away tactics.',
        new SC2Cost(150, 100, 25, 2),
        new SC2UnitInformation(
            new SC2Target(false, true),
            [ATTR_LIGHT, ATTR_MECHANICAL],
            new SC2Attack(5, 12.7, 0.79, 5),
            new SC2Defence(120, 60, 0),
            new SC2OtherInfo(new SC2Energy(50, 200), 0, 0, 0)
        ),
        null,
        new SC2Source(STARGATE, KEY_X),
        new SC2Asset('assets/units/protoss/thumbnail/phoenix.png', 'assets/units/protoss/image/phoenix.jpg')
    ),
    new SC2Unit(
        '1516d125-d178-4053-9c56-f7c06030209c',
        'Void Ray',
        PROTOSS_RACE,
        'The Void Ray is an airborne siege cannon for the Protoss ' +
        'that is built at the Stargate. ',
        new SC2Cost(250, 150, 43, 4),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_ARMORED, ATTR_MECHANICAL],
            new SC2Attack(6, 16.8, 0.36, 6),
            new SC2Defence(150, 100, 0),
            new SC2OtherInfo(null, 3.5, 10, null)
        ),
        null,
        new SC2Source(STARGATE, KEY_V),
        new SC2Asset('assets/units/protoss/thumbnail/void-ray.png', 'assets/units/protoss/image/void-ray.jpg')
    ),
    new SC2Unit(
        '17c76d99-a451-4987-9346-55971a5a8ab3',
        'Oracle',
        PROTOSS_RACE,
        'The Oracle is a flying harassment and support caster for the Protoss that is produced ' +
        'from the Stargate. While fairly expensive and fragile, the Oracle is a very ' +
        'mobile unit and has several useful spells.',
        new SC2Cost(150, 150, 36, 3),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_PSIONIC],
            new SC2Attack(15, 24.4, 0.61, 4),
            new SC2Defence(100, 60, 0),
            new SC2OtherInfo(null, 5.6, 10, null)
        ),
        null,
        new SC2Source(STARGATE, KEY_E),
        new SC2Asset('assets/units/protoss/thumbnail/oracle.png', 'assets/units/protoss/image/oracle.jpg')
    ),
    // TODO: Better handle carrier interceptors and whatever
    new SC2Unit(
        '91844ecd-4e4d-4a09-ae51-e957cb91a539',
        'Carrier',
        PROTOSS_RACE,
        'Carriers are the capital ships in the Protoss air force, built at the Stargate with the ' +
        'Fleet Beacon as a prerequisite. Unlike other units, Carriers do not engage the enemy directly. ' +
        'Instead, they launch tiny Interceptors that attack in a swarm around the Carrier.',
        new SC2Cost(350, 250, 86, 6),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
            new SC2Attack(5, 37.4, 2.14, 8),
            new SC2Defence(250, 150, 0),
            new SC2OtherInfo(null, 2.62, 12, null)
        ),
        null,
        new SC2Source(STARGATE, KEY_C),
        new SC2Asset('assets/units/protoss/thumbnail/carrier.png', 'assets/units/protoss/image/carrier.jpg')
    ),
    new SC2Unit(
        'a0446b8b-65fc-4837-9e22-2e8da3b7cf2c',
        'Tempest',
        PROTOSS_RACE,
        'The Tempest is a powerful capital ship for the Protoss that can be built from the Stargate ' +
        'once the Fleet Beacon has been completed. Its primary role is as a heavy bombardment unit, ' +
        'using its incredible range to attack air and ground targets from a safe distance. ',
        new SC2Cost(300, 200, 43, 6),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
            // TODO: Handle 2 attacks of Tempest (air/ground)
            new SC2Attack(0, 0, 0, 0),
            new SC2Defence(300, 150, 2),
            new SC2OtherInfo(null, 2.62, 12, null)
        ),
        null,
        new SC2Source(STARGATE, KEY_T),
        new SC2Asset('assets/units/protoss/thumbnail/tempest.png', 'assets/units/protoss/image/tempest.jpg')
    ),
    new SC2Unit(
        'fcfbc539-5ba0-4a01-a4fe-ec579414ddb4',
        'Mothership Core',
        PROTOSS_RACE,
        'The Mothership Core is a flying support caster for the Protoss that can be built ' +
        'from the Nexus once the Cybernetics Core is finished. Its primary roles are base ' +
        'defence and army support. Like the Mothership, the Mothership Core is a unique unit ' +
        'that a player can only have one of at any time.',
        new SC2Cost(100, 100, 21, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_PSIONIC],
            new SC2Attack(8, 13.1, 0.61, 5),
            new SC2Defence(130, 60, 1),
            new SC2OtherInfo(new SC2Energy(50, 200), 2.62, 9, null)
        ),
        null,
        new SC2Source(NEXUS, KEY_M),
        new SC2Asset('assets/units/protoss/thumbnail/mothership-core.png', 'assets/units/protoss/image/mothership-core.jpg')
    ),
    new SC2Unit(
        'eabd93e7-c5e3-4a07-9222-9c2c4d519246',
        'Mothership',
        PROTOSS_RACE,
        'The Mothership is the most powerful unit in the Protoss arsenal: Once a Fleet Beacon ' +
        'has been built, it may be transformed from the Mothership Core. Because of its extensive ' +
        'capabilities, the Mothership has a unique restriction: only one can be deployed by each player at a time.',
        new SC2Cost(300, 300, 100, 6),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE, ATTR_PSIONIC],
            new SC2Attack(6, 22.8, 1.58, 7),
            new SC2Defence(350, 350, 2),
            new SC2OtherInfo(new SC2Energy(50, 200), 2.62, 14, null)
        ),
        null,
        // TODO: Add source for mothership
        null,
        new SC2Asset('assets/units/protoss/thumbnail/mothership.png', 'assets/units/protoss/image/mothership.jpg')
    ),
    // TODO: Add special speed for zerg (on creep)
    new SC2Unit(
        '71239ff5-a24e-4d17-b103-65660b190642',
        'Larva',
        ZERG_RACE,
        'The Larva is the base unit for Zerg. It can morph into a lot of units.' + 
        'There can be a maximum of 19 Larva on one Hatchery. ' +
        'Additional Larvae produced at that Hatchery instantly die.',
        new SC2Cost(0, 0, 0, 0),
        new SC2UnitInformation(
            new SC2Target(false, false),
            [ATTR_LIGHT, ATTR_BIOLOGICAL],
            null,
            new SC2Defence(25, 0, 10),
            new SC2OtherInfo(null, 0.79, 5, null)
        ),
        null,
        new SC2Source(HATCHERY, KEY_S),
        new SC2Asset('assets/units/zerg/thumbnail/larva.png', 'assets/units/zerg/image/larva.jpg')
    ),
    new SC2Unit(
        '696afffa-a536-4360-a737-a0ca28e25471',
        'Drone',
        ZERG_RACE,
        'The Drone is the basic worker unit for Zerg. It can harvest Minerals and ' +
        'Vespene Gas as well as build any Zerg structure at the cost of its life. ' +
        'Drones differ from Probes and SCVs in that they can only slowly regenerate ' +
        'health as opposed to the fast recharging shields of the Probe or the repairable ' +
        '45 hit points of the SCV.',
        new SC2Cost(50, 0, 12, 1),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_LIGHT, ATTR_BIOLOGICAL],
            new SC2Attack(5, 4.67, 1.07, 0.1),
            new SC2Defence(40, 0, 0),
            new SC2OtherInfo(null, 3.94, 8, 1)
        ),
        null,
        new SC2Source(HATCHERY, KEY_D),
        new SC2Asset('assets/units/zerg/thumbnail/drone.png', 'assets/units/zerg/image/drone.jpg')
    ),
    // TODO: Add 2 types of attack for queen
    new SC2Unit(
        '41a6dd8a-1913-47fb-9825-d13dff723ebb',
        'Queen',
        ZERG_RACE,
        'The Queen is an essential unit for the Zerg base, capable of being spawned ' +
        'from any Hatchery after a Spawning Pool has been built. The unit provides ' +
        'light defense against both ground and air threats.',
        new SC2Cost(150, 0, 36, 2),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_BIOLOGICAL, ATTR_PSIONIC],
            new SC2Attack(4, 11.2, 0.71, 5),
            new SC2Defence(175, 0, 1),
            new SC2OtherInfo(null, 1.31, 9, 2)
        ),
        null,
        new SC2Source(HATCHERY, KEY_Q),
        new SC2Asset('assets/units/zerg/thumbnail/queen.png', 'assets/units/zerg/image/queen.jpg')
    ),
    new SC2Unit(
        'c1a2f2ca-a586-4c4f-b40e-3485c0de8c20',
        'Zergling',
        ZERG_RACE,
        'The Zergling is a small and fast melee attacker and the backbone of the Zerg ' +
        'army. Individual Zerglings are weak, but large groups can surround and terrorize ' +
        'enemy ground forces. In such groups, they soak a lot of incoming damage and provide ' +
        'a shield for more expensive units.',
        new SC2Cost(25, 0, 17, 0.5),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_LIGHT, ATTR_BIOLOGICAL],
            new SC2Attack(5, 10, 0.497, 0.1),
            new SC2Defence(35, 0, 0),
            new SC2OtherInfo(null, 4.13, 8, 1)
        ),
        null,
        new SC2Source(HATCHERY, KEY_Z),
        new SC2Asset('assets/units/zerg/thumbnail/zergling.png', 'assets/units/zerg/image/zergling.jpg')
    ),
    // TODO: Source
    // TODO: 2 attacks
    new SC2Unit(
        'c40959e8-31ae-49bf-8a3a-eb6e127c58f6',
        'Baneling',
        ZERG_RACE,
        'The Baneling is a suicide bomber unit morphed from Zerglings after a Baneling Nest has been ' +
        'constructed. Similar to the Infested Terran from Brood War, the Baneling is a suicidal unit ' +
        'that deals significant splash damage.',
        new SC2Cost(25, 25, 14, 0.5),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_BIOLOGICAL],
            new SC2Attack(20, 0, 0, 0.25/*/2.20*/),
            new SC2Defence(30, 0, 0),
            new SC2OtherInfo(null, 4.55, 8, 2)
        ),
        null,
        null,
        new SC2Asset('assets/units/zerg/thumbnail/baneling.png', 'assets/units/zerg/image/baneling.jpg')
    ),
    new SC2Unit(
        'd41fae3e-c6a7-4d84-81ed-0da67b9de9a5',
        'Roach',
        ZERG_RACE,
        'The Roach is an Armored-ground unit that can be produced after a Roach Warren has been built. ' +
        'With the Tunneling Claws upgrade, the Roach becomes one of two units (the other being the Infestor) ' +
        'that is able to move while burrowed. This is also indicated by the appearance of crystals on ' +
        'the backs of the Roaches.',
        new SC2Cost(75, 25, 19, 2),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_ARMORED, ATTR_BIOLOGICAL],
            new SC2Attack(16, 11.2, 1.43, 4),
            new SC2Defence(145, 0, 1),
            new SC2OtherInfo(null, 3.15, 9, 2)
        ),
        null,
        new SC2Source(HATCHERY, KEY_R),
        new SC2Asset('assets/units/zerg/thumbnail/roach.png', 'assets/units/zerg/image/roach.jpg')
    ),
    new SC2Unit(
        'fbd2f216-7310-47b4-8b46-23e12983e455',
        'Ravager',
        ZERG_RACE,
        'The Ravager is a ground Zerg unit, morphed out of the Roach. Its effectiveness heavily relies ' +
        'on player micro due to its corrosive bile ability. This ability can destroy Force Fields and ' +
        'can be used for harassment, e.g. if the spell is cast on workers (mineral line).',
        new SC2Cost(25, 75, 9, 1),
        new SC2UnitInformation(
            new SC2Target(true, false),
            [ATTR_BIOLOGICAL],
            new SC2Attack(16, 14.04, 1.14, 6),
            new SC2Defence(120, 0, 1),
            new SC2OtherInfo(null, 3.85, 9, 4)
        ),
        null,
        new SC2Source(HATCHERY, KEY_V),
        new SC2Asset('assets/units/zerg/thumbnail/ravager.png', 'assets/units/zerg/image/ravager.png')
    ),
    new SC2Unit(
        'bfde4655-c848-43da-9305-4d11e13b9609',
        'Hydralisk',
        ZERG_RACE,
        'The Hydralisk is a ranged Lair-tech unit that can be after building a Hydralisk Den. The ' +
        'Hydralisk\'s fast attack and high damage make it effective at dealing consistent to ground ' + 
        'and air unit in the game. Can morph into the Lurker after morphing the Hydralisk Den into a ' +
        'Lurker Den.',
        new SC2Cost(100, 50, 24, 2),
        new SC2UnitInformation(
            new SC2Target(true, true),
            [ATTR_LIGHT, ATTR_BIOLOGICAL],
            new SC2Attack(12, 22.4, 0.54, 5),
            new SC2Defence(90, 0, 0),
            new SC2OtherInfo(null, 3.15, 9, 2)
        ),
        null,
        new SC2Source(HATCHERY, KEY_H),
        new SC2Asset('assets/units/zerg/thumbnail/hydralisk.png', 'assets/units/zerg/image/hydralisk.jpg')
    ),
    // new SC2Unit(
    //     '66bcdc15-8b11-425b-bde1-da294bb26647',
    //     'Lurker',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/lurker.png', 'assets/units/zerg/image/lurker.png')
    // ),
    // new SC2Unit(
    //     'afadd0eb-d5a4-4ae7-9dac-1accc3cd8799',
    //     'Infestor',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/infestor.png', 'assets/units/zerg/image/infestor.jpg')
    // ),
    // new SC2Unit(
    //     'e1f0f8ec-3976-4efb-bc52-fbc5cf2600a2',
    //     'Swarm Host',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/swarm-host.png', 'assets/units/zerg/image/swarm-host.jpg')
    // ),
    // new SC2Unit(
    //     '6a9c23c9-a203-4a0c-b4f6-bbc1490d14b8',
    //     'Ultralisk',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/ultralisk.png', 'assets/units/zerg/image/ultralisk.jpg')
    // ),
    // new SC2Unit(
    //     '3e80bfee-1cdf-45b3-aa38-4bb1ef50ab9b',
    //     'Locust',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/locust.png', 'assets/units/zerg/image/locust.jpg')
    // ),
    // new SC2Unit(
    //     '42995dff-9e7c-4f43-a1c8-fdb7305dd80e',
    //     'Broodling',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/broodling.png', 'assets/units/zerg/image/broodling.jpg')
    // ),
    // new SC2Unit(
    //     'd8784044-1f70-453c-b715-0e8adc3f6a72',
    //     'Changeling',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/changeling.png', 'assets/units/zerg/image/changeling.jpg')
    // ),
    // // new SC2Unit(
    // //     'e82d6ea5-7904-4a49-b52b-2825191c4f88', 
    // //     'Infested Terran',
    // //     ZERG_RACE,
    // //     '',
    // //     new SC2Cost(0, 0, 0, 0),
    // //     null,
    // //     null,
    // //     new SC2Asset('assets/units/zerg/thumbnail/scv.png', 'assets/units/zerg/image/')
    // // ),
    // new SC2Unit(
    //     '9acd24e5-f25f-4f1b-b174-d7a897c6c755',
    //     'Nydus Worm',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/nydus-worm.png', 'assets/units/zerg/image/nydus-worm.jpg')
    // ),
    // new SC2Unit(
    //     'a0d0978d-bacd-45b4-b325-4db81cdd1bc0',
    //     'Overlord',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/overlord.png', 'assets/units/zerg/image/overlord.jpg')
    // ),
    // new SC2Unit(
    //     '774abc95-9b07-4908-97ee-c09fc8c892f4',
    //     'Overseer',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/overseer.png', 'assets/units/zerg/image/overseer.jpg')
    // ),
    // new SC2Unit(
    //     '31719cf6-32b8-44a3-8669-6eacec963093',
    //     'Mutalisk',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/mutalisk.png', 'assets/units/zerg/image/mutalisk.jpg')
    // ),
    // new SC2Unit(
    //     'db05e2df-47f1-404f-a99c-a962f3bc81e5',
    //     'Corruptor',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/corruptor.png', 'assets/units/zerg/image/corruptor.jpg')
    // ),
    // new SC2Unit(
    //     '0c28d5dc-8e40-404c-9845-0bd9c5aebe49',
    //     'Brood Lord',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/brood-lord.png', 'assets/units/zerg/image/brood-lord.jpg')
    // ),
    // new SC2Unit(
    //     '5e5dfa1a-5137-4183-912d-fbe8c7ef137f',
    //     'Viper',
    //     ZERG_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/zerg/thumbnail/viper.png', 'assets/units/zerg/image/viper.jpg')
    // ),
    // new SC2Unit(
    //     '1342531e-45e0-4d18-b6bd-bad14609514d',
    //     'SCV',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/scv.png', 'assets/units/terran/image/scv.jpg')
    // ),
    // // new SC2Unit(
    // //     '6f674e6e-b904-4c18-9acf-3a6b0c79a999', 
    // //     'Mule',
    // //     TERRAN_RACE,
    // //     '', 
    // //     new SC2Cost(0, 0, 0, 0),
    // //     null,
    // //     null,
    // //     new SC2Asset('assets/units/terran/thumbnail/scv.png', 'assets/units/terran/image/mule.jpg')
    // // ),
    // new SC2Unit(
    //     'c1871f19-cd83-4f3c-a8fd-ca663d384cee',
    //     'Marine',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/marine.png', 'assets/units/terran/image/marine.jpg')
    // ),
    // new SC2Unit(
    //     'f064ac69-e4c1-4d23-90dd-26002bba354f',
    //     'Marauder',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/marauder.png', 'assets/units/terran/image/marauder.jpg')
    // ),
    // new SC2Unit(
    //     '30e8b536-20f4-45b8-b04c-9c0c08aca19e',
    //     'Reaper',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/reaper.png', 'assets/units/terran/image/reaper.jpg')
    // ),
    // new SC2Unit(
    //     '7947077d-2f67-453f-acea-fe413b5873cd',
    //     'Ghost',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/ghost.png', 'assets/units/terran/image/ghost.jpg')
    // ),
    // new SC2Unit(
    //     '4100a23b-9d42-42b1-9958-06c022e85cc4',
    //     'Hellion',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/hellion.png', 'assets/units/terran/image/hellion.jpg')
    // ),
    // new SC2Unit(
    //     'a7b67a8f-02e8-4df2-9e18-8c14b1320e79',
    //     'Hellbat',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/hellbat.png', 'assets/units/terran/image/hellbat.jpg')
    // ),
    // new SC2Unit(
    //     'f20e2af3-97fd-4a9b-987a-e126647d60e0',
    //     'Siege Tank',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/siege-tank.png', 'assets/units/terran/image/siege-tank.jpg')
    // ),
    // new SC2Unit(
    //     '0c8e5b4d-7244-4dee-a3ea-8ad5bcace622',
    //     'Cyclone',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/cyclone.png', 'assets/units/terran/image/cyclone.png')
    // ),
    // new SC2Unit(
    //     '2005de9b-f2b4-40d1-a8f2-5ee4dd9e7cd1',
    //     'Widow Mine',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/widow-mine.png', 'assets/units/terran/image/widow-mine.jpg')
    // ),
    // new SC2Unit(
    //     '09b552dc-575d-46a3-92ff-0d6ad7801c65',
    //     'Thor',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/thor.png', 'assets/units/terran/image/thor.jpg')
    // ),
    // new SC2Unit(
    //     'e0912697-ba64-4fe6-8122-5014431638e2',
    //     'Viking',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/viking.png', 'assets/units/terran/image/viking.jpg')
    // ),
    // new SC2Unit(
    //     '9389a6f9-c9f8-4219-a2bc-9ff5efc6be6c',
    //     'Medivac',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/medivac.png', 'assets/units/terran/image/medivac.jpg')
    // ),
    // new SC2Unit(
    //     'c30399f0-57e9-4faa-8810-95724f949190',
    //     'Liberator',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/liberator.png', 'assets/units/terran/image/liberator.png')
    // ),
    // new SC2Unit(
    //     '15b477ac-a5bb-4dc3-b62d-0eefe69d9b09',
    //     'Raven',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/raven.png', 'assets/units/terran/image/raven.jpg')
    // ),
    // new SC2Unit(
    //     '0c928cb3-86db-4d48-b32d-6ab8d90317b0',
    //     'Banshee',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/banshee.png', 'assets/units/terran/image/banshee.jpg')
    // ),
    // new SC2Unit(
    //     'ce481091-38c3-4633-8e9a-b2205f34d104',
    //     'Battlecruiser',
    //     TERRAN_RACE,
    //     '',
    //     new SC2Cost(0, 0, 0, 0),
    //     new SC2UnitInformation(true, false),
    //     null,
    //     null,
    //     new SC2Asset('assets/units/terran/thumbnail/battlecruiser.png', 'assets/units/terran/image/battlecruiser.jpg')
    // )
    // // new SC2Unit(
    // //     '9bc1417d-8649-4c0f-bca7-0a5985b86a72',
    // //     'Auto-Turret',
    // //     TERRAN_RACE,
    // //     '', 
    // //     new SC2Cost(0, 0, 0, 0),
    // //     null,
    // //     null,
    // //     new SC2Asset('assets/units/terran/thumbnail/auto-turret.png', null)
    // // ),
    // // new SC2Unit(
    // //     '32fc8e1f-fa2a-4fc7-85dc-0e55d97df97d',
    // //     'Point Defense Drone',
    // //     TERRAN_RACE,
    // //     '', 
    // //     new SC2Cost(0, 0, 0, 0),
    // //     null,
    // //     null,
    // //     new SC2Asset('assets/units/terran/thumbnail/scv.png', null)
    // // )
]