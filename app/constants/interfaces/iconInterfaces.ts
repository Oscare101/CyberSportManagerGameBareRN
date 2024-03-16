export interface Stat {
  value:
    | 'reaction'
    | 'accuracy'
    | 'sprayControl'
    | 'flicksControl'
    | 'nades'
    // | 'aggression'
    | 'tactics';
  // | 'stamina';
}

export interface Cup {
  value:
    | 'Winter'
    | 'Spring'
    | 'Summer'
    | 'Autumn'
    | 'WorldCupQualification'
    | 'WorldCupChampionship'
    | 'Major'
    | 'Globe'
    | 'Master'
    | 'GrandSlam'
    | 'Crown'
    | 'Cyber'
    | 'Prestige1'
    | 'Prestige2'
    | 'Prestige3';
}

export interface Teams {
  value:
    | 'Island'
    | 'Jupiter'
    | 'NOVA'
    | 'Quazars'
    | 'Solid'
    | 'Vangard'
    | 'Eagles'
    | 'Kadagan'
    | 'Youth'
    | 'University'
    | 'Canoe'
    | 'Moon'
    | 'Dream'
    | 'Five'
    | 'Sempra'
    | 'Guardians';
}

export interface Guns {
  value:
    | 'Desert Eagle'
    | 'R8 Revolver'
    | 'Five-SeveN'
    | 'Tec-9'
    | 'CZ75-Auto'
    | 'Dual Berettas'
    | 'P250'
    | 'Glock-18'
    | 'P2000'
    | 'USP-S'
    | 'Galil'
    | 'AK-47'
    | 'M4A1-S'
    | 'M4A4'
    | 'SG 553'
    | 'AUG'
    | 'FAMAS'
    | 'AWP'
    | 'G3SG1'
    | 'SSG 08'
    | 'SCAR-20';
}

export interface Nades {
  value: 'Smoke' | 'HE Grenade' | 'Incendiary Grenade' | 'Flash Bang';
}

export interface Armor {
  value: 'kevlar' | 'kevlarHemlet';
}

export interface Theme {
  value: 'dark' | 'light';
}

export interface IconName {
  value:
    | 'back'
    | 'settings'
    | 'halfStar'
    | 'grid'
    | 'practice'
    | 'archive'
    | 'people'
    | 'personAdd';
}
