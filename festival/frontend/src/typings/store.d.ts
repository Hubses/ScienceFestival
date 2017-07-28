declare namespace sf.store {
    interface LoadableObject<T> {
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
        entity: T
    }
    interface RemovableObject<T> {
        isRemovable: boolean;
        isRemoving: boolean;
        isRemoved: boolean;
        isRemoveError: boolean;
        entity: T;
    }
    interface CreatableObject<T> {
        isCreatable: boolean;
        isCreated: boolean;
        isCreating: boolean;
        isCreatingWithEror: boolean;
        entity: T;
    }
    interface SearchableObject<T> {
        isSearching: boolean;
        isSearchComplete: boolean;
        searchResult: T;
    }
    interface EditableObject<T> {
        isEditable: boolean;
        isEditSuccess: boolean;
        isEdited: boolean;
        isEditError: boolean;
        entity: T;
    }
}
