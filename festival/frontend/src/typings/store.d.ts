declare namespace sf.store {
    interface LoadableObject<T> {
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
        entity: T
    }
    interface RemovableObject<T> {
        isRemoving: boolean;
        isRemoved: boolean;
        isRemoveError: boolean;
        entity: T;
    }
    interface CreatableObject<T> {
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
        isEditing: boolean;
        isEdited: boolean;
        isEditStart: boolean;
        isEditEnd: boolean;
        isEditError: boolean;
        entity: T;
    }
}
