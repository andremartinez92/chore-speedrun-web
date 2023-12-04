import { HOME_ROUTE, SIGN_IN_ROUTE } from '@/routes';
import { UserType } from '@/types';
import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

export function useProtectedRoute(
    user: UserType | null,
    isLoadingUser?: boolean
) {
    const router = useRouter();
    const segments = useSegments();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if (!navigationState?.key) return;

        const updateRoute = () => {
            const inAuthGroup = segments[0] === 'sign-in';

            if (
                // If the user is not signed in and the initial segment is not anything in the auth group.
                (!user?.sessionToken || (!user && !isLoadingUser)) &&
                !inAuthGroup
            ) {
                // Redirect to the sign-in page.
                router.replace(SIGN_IN_ROUTE);
            } else if (user?.sessionToken && inAuthGroup) {
                // Redirect away from the sign-in page.
                router.replace(HOME_ROUTE);
            }
        };

        updateRoute();
    }, [segments, navigationState, user?.sessionToken, user?.user.id]);
}
