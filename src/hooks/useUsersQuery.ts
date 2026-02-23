import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/services/api/queryKeys';
import { createUser, getUsers } from '@/services/api/users';
import type { CreateUserDto } from '@/services/api/types';

export function useUsersQuery() {
  return useQuery({
    queryKey: queryKeys.users.lists(),
    queryFn: async () => {
      const res = await getUsers();
      return res.data;
    },
  });
}

export function useCreateUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateUserDto) => createUser(payload).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
  });
}
