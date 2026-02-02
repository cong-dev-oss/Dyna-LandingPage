export const TAB_ITEMS = [
  { state: 'Inactive', type: 'Primary', label: 'Monthly' },
  { state: 'Inactive', type: 'Primary', label: '6-Month Plan' },
  { state: 'Inactive', type: 'Primary', label: '12-Month Plan' },
] as const;

export type AvatarItem = {
  placeholder: boolean;
  size: 'lg' | 'xl';
  statusIcon: boolean | undefined;
  text: boolean;
  contrastBorder: boolean;
  avatarMarginLeft: string;
  avatarHeight: string;
  avatarWidth: string;
};

export const AVATAR_ITEMS: AvatarItem[] = [
  {
    placeholder: false,
    size: 'lg',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '51px',
    avatarWidth: '51px',
  },
  {
    placeholder: false,
    size: 'lg',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '-8px',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'lg',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '-8px',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'lg',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '-8px',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'lg',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '-8px',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '59px',
    avatarWidth: '59px',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '',
    avatarWidth: '',
  },
  {
    placeholder: false,
    size: 'xl',
    statusIcon: undefined,
    text: false,
    contrastBorder: true,
    avatarMarginLeft: '',
    avatarHeight: '',
    avatarWidth: '',
  },
];

export const BLOG_ITEMS = [
  { frameDivBackgroundImage: "url('/Frame-2087327364@3x.png')" },
  { frameDivBackgroundImage: "url('/Frame-20873273641@3x.png')" },
  { frameDivBackgroundImage: "url('/Frame-20873273641@3x.png')" },
] as const;

export const TARGET_AUDIENCE_LIST = [
  'Brise le cycle de la solitude professionnelle',
  'Offre une vision claire et un tableau de bord simple',
  'Aide à piloter ton activité plus sereinement',
  'Te permet de rester concentré sur l\'essentiel',
  "Une vraie co-pilote, toujours à tes côtés",
] as const;
