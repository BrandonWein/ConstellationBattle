function epicConstellationBattle(constellation1, constellation2) {
    const battleOutcomes = [
        {
            description: `${constellation1} and ${constellation2} clashed in the night sky, their stars shimmering with the intensity of a thousand suns. As the battle raged on, ${constellation1} unleashed a flurry of meteors, overwhelming ${constellation2} with sheer brilliance. The heavens watched in awe as ${constellation1} emerged victorious, its stars glowing with newfound glory.`,
            winner: constellation1
        },
        {
            description: `In a cosmic dance, ${constellation1} outmaneuvered ${constellation2}, leaving a trail of stardust in its wake. ${constellation2} fought valiantly, its stars blazing with determination, but ${constellation1}'s agility proved too much. With a final, dazzling maneuver, ${constellation1} claimed victory, its stars twinkling triumphantly.`,
            winner: constellation1
        },
        {
            description: `The heavens trembled as ${constellation1} and ${constellation2} engaged in a fierce battle, their celestial forms intertwining. ${constellation2}, with its ancient wisdom, countered every move of ${constellation1}, turning the tide of battle. In a stunning reversal, ${constellation2} emerged as the victor, its stars shining with the light of ages.`,
            winner: constellation2
        },
        {
            description: `With a roar that echoed through the galaxies, ${constellation1} charged at ${constellation2}, their stars colliding in a brilliant display. ${constellation2} stood firm, harnessing the power of the cosmos to repel ${constellation1}'s assault. As the dust settled, ${constellation2} stood triumphant, its stars a beacon of resilience.`,
            winner: constellation2
        },
        {
            description: `${constellation1} and ${constellation2} circled each other warily, each waiting for the perfect moment to strike. In a sudden burst of speed, ${constellation1} launched an attack, its stars blazing with intensity. ${constellation2} was caught off guard, and ${constellation1} seized the opportunity to secure victory, its stars celebrating the triumph.`,
            winner: constellation1
        },
        {
            description: `In a flash of light, ${constellation1} unleashed its power upon ${constellation2}, the sky ablaze with their conflict. ${constellation2} retaliated with a storm of comets, but ${constellation1}'s resolve was unyielding. With a final, decisive strike, ${constellation1} claimed victory, its stars shining brighter than ever.`,
            winner: constellation1
        },
        {
            description: `The stars of ${constellation1} and ${constellation2} flickered as they fought, each determined to outshine the other. ${constellation2}, drawing strength from the constellations around it, launched a counterattack that left ${constellation1} reeling. In a spectacular display, ${constellation2} emerged victorious, its stars a testament to its might.`,
            winner: constellation2
        },
        {
            description: `As the battle raged on, ${constellation1} and ${constellation2} became a blur of motion, their stars weaving a tapestry of light. ${constellation1}, with its relentless energy, overwhelmed ${constellation2}, leaving it no room to recover. The sky bore witness to ${constellation1}'s triumph, its stars a chorus of victory.`,
            winner: constellation1
        },
        {
            description: `With a mighty swing, ${constellation1} struck ${constellation2}, the impact sending ripples through the fabric of space. ${constellation2} staggered but quickly regained its footing, launching a counteroffensive that caught ${constellation1} by surprise. In a dramatic turn of events, ${constellation2} claimed victory, its stars glowing with pride.`,
            winner: constellation2
        },
        {
            description: `The constellations ${constellation1} and ${constellation2} locked in combat, their stars pulsing with energy. ${constellation1}, with a strategic maneuver, outflanked ${constellation2}, gaining the upper hand. The night sky celebrated ${constellation1}'s victory, its stars a symphony of triumph.`,
            winner: constellation1
        },
        {
            description: `In a celestial showdown, ${constellation1} and ${constellation2} unleashed their full power, their stars blazing with fury. ${constellation1} harnessed the energy of a supernova, overwhelming ${constellation2} in a brilliant explosion. The universe echoed with the triumph of ${constellation1}, its stars a testament to its might.`,
            winner: constellation1
        },
        {
            description: `The cosmic battlefield was set as ${constellation1} and ${constellation2} prepared for an epic clash. ${constellation2}, with its ancient wisdom, anticipated every move of ${constellation1}, countering with precision. In a masterful display of strategy, ${constellation2} emerged victorious, its stars shining with the light of victory.`,
            winner: constellation2
        },
        {
            description: `As the stars aligned, ${constellation1} and ${constellation2} engaged in a battle of cosmic proportions. ${constellation1}, with its relentless determination, pushed forward, its stars blazing with intensity. ${constellation2} fought valiantly, but ${constellation1}'s resolve proved unbreakable. The night sky celebrated ${constellation1}'s triumph, its stars a chorus of victory.`,
            winner: constellation1
        },
        {
            description: `In a dazzling display of celestial power, ${constellation1} and ${constellation2} clashed, their stars creating a symphony of light. ${constellation2}, drawing strength from the constellations around it, launched a counterattack that left ${constellation1} reeling. In a spectacular display, ${constellation2} emerged victorious, its stars a testament to its might.`,
            winner: constellation2
        },
        {
            description: `The heavens bore witness to the epic battle between ${constellation1} and ${constellation2}, their stars a testament to their strength. ${constellation1}, with a burst of speed, darted past ${constellation2}, its stars leaving a trail of brilliance. The universe echoed with the triumph of ${constellation1}, its stars a testament to its might.`,
            winner: constellation1
        },
        {
            description: `In a cosmic duel, ${constellation1} and ${constellation2} fought with all their might, their stars blazing with fury. ${constellation2}, with its ancient wisdom, anticipated every move of ${constellation1}, countering with precision. In a masterful display of strategy, ${constellation2} emerged victorious, its stars shining with the light of victory.`,
            winner: constellation2
        },
        {
            description: `The stars aligned as ${constellation1} and ${constellation2} prepared for an epic clash. ${constellation1}, with its relentless determination, pushed forward, its stars blazing with intensity. ${constellation2} fought valiantly, but ${constellation1}'s resolve proved unbreakable. The night sky celebrated ${constellation1}'s triumph, its stars a chorus of victory.`,
            winner: constellation1
        },
        {
            description: `In a celestial showdown, ${constellation1} and ${constellation2} unleashed their full power, their stars blazing with fury. ${constellation2}, drawing strength from the constellations around it, launched a counterattack that left ${constellation1} reeling. In a spectacular display, ${constellation2} emerged victorious, its stars a testament to its might.`,
            winner: constellation2
        },
        {
            description: `The cosmic battlefield was set as ${constellation1} and ${constellation2} prepared for an epic clash. ${constellation1}, with its relentless determination, pushed forward, its stars blazing with intensity. ${constellation2} fought valiantly, but ${constellation1}'s resolve proved unbreakable. The night sky celebrated ${constellation1}'s triumph, its stars a chorus of victory.`,
            winner: constellation1
        },
        {
            description: `In a dazzling display of celestial power, ${constellation1} and ${constellation2} clashed, their stars creating a symphony of light. ${constellation2}, drawing strength from the constellations around it, launched a counterattack that left ${constellation1} reeling. In a spectacular display, ${constellation2} emerged victorious, its stars a testament to its might.`,
            winner: constellation2
        },
        {
            description: `In a cosmic ballet, ${constellation1} and ${constellation2} twirled through the heavens, their stars painting trails of light across the sky. ${constellation1} harnessed the energy of a nearby nebula, launching a dazzling assault that left ${constellation2} dazzled. With a final, graceful spin, ${constellation1} claimed victory, its stars a symphony of triumph.`,
            winner: constellation1
        },
        {
            description: `The universe held its breath as ${constellation1} and ${constellation2} prepared for a legendary duel. ${constellation2}, drawing upon the wisdom of the ancients, countered every move of ${constellation1} with precision and grace. In a breathtaking display of strategy, ${constellation2} emerged victorious, its stars shining with the light of victory.`,
            winner: constellation2
        },
        {
            description: `As the cosmic winds howled, ${constellation1} and ${constellation2} engaged in a battle of epic proportions. ${constellation1}, with its relentless determination, pushed forward, its stars blazing with intensity. ${constellation2} fought valiantly, but ${constellation1}'s resolve proved unbreakable. The night sky celebrated ${constellation1}'s triumph, its stars a chorus of victory.`,
            winner: constellation1
        },
        {
            description: `In a celestial symphony, ${constellation1} and ${constellation2} clashed, their stars creating a melody of light. ${constellation2}, drawing strength from the constellations around it, launched a counterattack that left ${constellation1} reeling. In a spectacular display, ${constellation2} emerged victorious, its stars a testament to its might.`,
            winner: constellation2
        },
        {
            description: `The celestial stage was set as ${constellation1} and ${constellation2} ignited the cosmos with their battle. ${constellation1}, calling upon the power of the galaxies, unleashed a stellar storm that engulfed ${constellation2}. The night sky erupted in light as ${constellation1} claimed its rightful place as the champion of the stars.`,
            winner: constellation1
        },
        {
            description: `The heavens resonated with the clash of ${constellation1} and ${constellation2}, their stars colliding in an explosion of color. ${constellation2}, channeling the might of a distant supernova, countered ${constellation1}'s every move. In a breathtaking final surge, ${constellation2} stood victorious, its stars pulsating with cosmic energy.`,
            winner: constellation2
        },
        {
            description: `As the galaxies turned, ${constellation1} and ${constellation2} met in a dazzling contest of light and motion. ${constellation1}, wielding the force of a collapsing star, struck with overwhelming intensity. ${constellation2} held its ground but was ultimately consumed by ${constellation1}'s unrelenting fury. The universe bore witness to ${constellation1}'s triumph.`,
            winner: constellation1
        },
        {
            description: `The stellar battlefield stretched far and wide as ${constellation1} and ${constellation2} engaged in an endless dance of war. ${constellation2}, with the patience of eternity, waited for the perfect moment to strike. With a sudden burst of brilliance, it outmaneuvered ${constellation1}, securing an unexpected yet decisive victory.`,
            winner: constellation2
        },
        {
            description: `Nebulae swirled as ${constellation1} and ${constellation2} collided, their energies weaving intricate patterns in the void. ${constellation1}, faster than the speed of light, darted through ${constellation2}'s defenses, striking true. The heavens erupted in celebration as ${constellation1} emerged victorious.`,
            winner: constellation1
        },
        {
            description: `In a cosmic tempest, ${constellation1} and ${constellation2} locked in a struggle that shook the very fabric of reality. ${constellation2}, ancient and wise, called upon the power of the cosmos to turn the tide. With a calculated and decisive strike, it overpowered ${constellation1}, sealing its victory in the annals of the stars.`,
            winner: constellation2
        },
        {
            description: `The stars shivered as ${constellation1} and ${constellation2} unleashed their might. ${constellation1}, brimming with the energy of a quasar, surged forward in a relentless assault. ${constellation2} fought valiantly, but the sheer magnitude of ${constellation1}'s power was undeniable. In the end, ${constellation1} stood triumphant, its stars blazing brighter than ever.`,
            winner: constellation1
        },
        {
            description: `The constellations gathered as ${constellation1} and ${constellation2} prepared for the battle of the ages. ${constellation2}, guided by the wisdom of millennia, danced through ${constellation1}'s attacks with grace. With an elegant yet devastating strike, ${constellation2} secured its place as the true ruler of the cosmos.`,
            winner: constellation2
        },
        {
            description: `A celestial roar echoed through space as ${constellation1} and ${constellation2} clashed in a legendary duel. ${constellation1}, fueled by the fire of a dying sun, rained cosmic fury upon ${constellation2}. Though ${constellation2} fought with unyielding strength, it could not withstand ${constellation1}'s relentless onslaught. The stars crowned ${constellation1} the champion.`,
            winner: constellation1
        },
        {
            description: `The battle raged across light-years as ${constellation1} and ${constellation2} engaged in a timeless conflict. ${constellation2}, wielding the gravitational might of a black hole, pulled ${constellation1} into its trap. As ${constellation1} struggled against the abyss, ${constellation2} stood victorious, its stars glistening with ancient power.`,
            winner: constellation2
        },
        {
            description: `The endless void trembled as ${constellation1} and ${constellation2} collided, their radiant energies warping the very fabric of space. ${constellation1}, driven by an unstoppable will, pierced through ${constellation2}'s defenses, scattering its stars. As the universe whispered of the battle, ${constellation1} shone as the ultimate victor.`,
            winner: constellation1
        },
        {
            description: `The great cosmic arena was filled with light as ${constellation1} and ${constellation2} waged war among the stars. ${constellation2}, wise and patient, absorbed ${constellation1}'s attacks before unleashing an overwhelming counterstrike. The universe erupted in celebration as ${constellation2} secured its well-earned victory.`,
            winner: constellation2
        },
        {
            description: `The fabric of the cosmos stretched and bent as ${constellation1} and ${constellation2} fought for dominance. ${constellation1}, embracing the chaotic power of a pulsar, unleashed a maelstrom of energy. ${constellation2} resisted, but the sheer magnitude of ${constellation1}'s strength proved too great. The celestial realms rejoiced as ${constellation1} claimed victory.`,
            winner: constellation1
        },
        {
            description: `The stars held their breath as ${constellation1} and ${constellation2} wove a dance of battle across the heavens. ${constellation2}, drawing on the infinite wisdom of the cosmos, countered each of ${constellation1}'s moves with precise and calculated strikes. In the end, ${constellation2} stood victorious, its stars gleaming with the light of triumph.`,
            winner: constellation2
        },
        {
            description: `Galactic tides shifted as ${constellation1} and ${constellation2} prepared for their fated showdown. ${constellation1}, fierce and unrelenting, stormed forward with an unstoppable barrage of stellar power. Though ${constellation2} fought bravely, it was ultimately no match for ${constellation1}'s might. The universe bore witness to ${constellation1}'s dominance.`,
            winner: constellation1
        }
    ];

    const randomIndex = Math.floor(Math.random() * battleOutcomes.length);
    const selectedOutcome = battleOutcomes[randomIndex];
    return {
        description: selectedOutcome.description,
        winner: selectedOutcome.winner
    };
}

// Example usage
const battleResult = epicConstellationBattle('Orion', 'Scorpius');
console.log(battleResult.description);
console.log(`Winner: ${battleResult.winner}`);
