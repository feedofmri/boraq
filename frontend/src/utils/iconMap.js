import {
    MonitorSmartphone, Brush, BrainCircuit, Mic, Watch, Link as LinkIcon,
    Star, Award, Shield, CheckCircle2, BadgeCheck,
    Search, PenTool, Code, Rocket, RefreshCcw,
    UserCheck, Video, MessageSquare,
} from 'lucide-react';

const iconMap = {
    MonitorSmartphone,
    Brush,
    BrainCircuit,
    Mic,
    Watch,
    Link: LinkIcon,
    Star,
    Award,
    Shield,
    CheckCircle2,
    BadgeCheck,
    Search,
    PenTool,
    Code,
    Rocket,
    RefreshCcw,
    UserCheck,
    Video,
    MessageSquare,
};

export function getIcon(name) {
    return iconMap[name] || null;
}

export default iconMap;

