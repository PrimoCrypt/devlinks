import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LinkContentTypes } from "../types/LinkTypes";

interface LinkStoreProps {
    initialLinks: LinkContentTypes[];
    addLink: (link: LinkContentTypes) => void;
    removeLink: (link: LinkContentTypes) => void;
    updateLink: (updatedLink: LinkContentTypes) => void;
}

const useLinksStore = create<LinkStoreProps>()(persist((set) => ({
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
}),{name: "link-store"}));

export default useLinksStore;