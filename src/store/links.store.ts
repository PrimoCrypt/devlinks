import { LinkContentTypes } from "@/types/LinkTypes";
import { create } from "zustand";

interface LinkStoreProps {
    initialLinks: LinkContentTypes[];
    addLink: (link: LinkContentTypes) => void;
    removeLink: (link: LinkContentTypes) => void;
    updateLink: (updatedLink: LinkContentTypes) => void;
}

const useLinksStore = create<LinkStoreProps>((set) => ({
    initialLinks: [],
    addLink: (link) =>
        set((state) => ({ initialLinks: [...state.initialLinks, link] })),
    removeLink: (link) =>
        set((state) => ({
            initialLinks: state.initialLinks.filter(
                (previousLink) => previousLink.id !== link.id
            ),
        })),
    updateLink: (updatedLink) =>
        set((state) => ({
            initialLinks: state.initialLinks.map(link => 
                link.id === updatedLink.id ? updatedLink : link
            ),
        })),
}));

export default useLinksStore;