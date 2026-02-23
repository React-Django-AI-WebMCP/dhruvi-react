import { apiClient } from '@/services/api/client';
import { endpoints } from '@/services/api/endpoints';
import type { ApiResponse, CreateUserDto, UserDto } from '@/services/api/types';

export async function getUsers(): Promise<ApiResponse<UserDto[]>> {
  const { data } = await apiClient.get<ApiResponse<UserDto[]>>(endpoints.users.list());
  return data;
}

export async function createUser(payload: CreateUserDto): Promise<ApiResponse<UserDto>> {
  const { data } = await apiClient.post<ApiResponse<UserDto>>(endpoints.users.list(), payload);
  return data;
}
