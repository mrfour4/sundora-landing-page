'use client';

import { sendLead } from '@/app/actions/send-lead';
import { albra } from '@/app/fonts';
import { Button } from '@/components/sundora/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { HOME_BOTTOM_IMG } from '@/constants';
import { useServerAction } from '@/hooks/use-server-action';
import { cn } from '@/lib/utils';
import { registerSchema, TRegisterValues } from '@/schemas/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useId } from 'react';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
  const form = useForm<TRegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', phone: '' },
  });

  const { submit, isPending } = useServerAction<TRegisterValues>(sendLead, {
    messages: {
      loading: 'Đang gửi...',
      success: 'Gửi thành công!',
      error: (err) =>
        (err as Error).message || 'Gửi thất bại, vui lòng thử lại.',
    },
    afterSuccess: () => form.reset(),
  });

  const inputId = useId();

  const onSubmit = (values: TRegisterValues) => {
    submit(values);
  };

  return (
    <div
      style={{ backgroundImage: `url(${HOME_BOTTOM_IMG})` }}
      className="z-40 flex flex-col justify-between gap-x-20 gap-y-3 px-6 py-4 lg:h-28 lg:flex-row lg:items-center lg:px-20"
    >
      <Label
        className={cn(
          'text-sm font-light text-sundora-secondary lg:text-lg 2xl:ml-auto',
          albra.className
        )}
        htmlFor={inputId}
      >
        Đăng ký tư vấn
      </Label>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="items-center space-y-4 gap-x-16 lg:flex lg:flex-1 lg:space-y-0"
        >
          <div className="flex items-center justify-between lg:flex-1 lg:justify-end lg:gap-x-10">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      id={inputId}
                      placeholder="Họ và tên*"
                      className={cn(
                        'border-b border-sundora-secondary-foreground text-xs font-light text-white outline-none placeholder:text-xs placeholder:text-white focus-visible:border-b-2 focus-visible:placeholder:text-white/80 lg:text-sm lg:placeholder:text-sm',
                        albra.className
                      )}
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage
                    className={cn('text-xs lg:text-sm', albra.className)}
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="Số điện thoại*"
                      className={cn(
                        'border-b border-sundora-secondary-foreground text-xs font-light text-white outline-none placeholder:text-xs placeholder:text-white focus-visible:border-b-2 focus-visible:placeholder:text-white/80 lg:text-sm lg:placeholder:text-sm',
                        albra.className
                      )}
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage
                    className={cn('text-xs lg:text-sm', albra.className)}
                  />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            className="text-sundora-secondary-foreground-foreground w-full px-5 py-1 text-sm uppercase lg:w-auto"
            disabled={isPending}
          >
            {isPending ? 'đang gửi...' : 'gửi thông tin'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
