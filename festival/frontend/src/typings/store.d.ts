declare namespace sf.store {
    interface LoadableObject<T> {
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
        entity: T
    }
}