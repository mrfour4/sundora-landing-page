'use client';

import { sendLead } from '@/app/actions/send-lead';
import { albra, sparkling } from '@/app/fonts';
import { Button } from '@/components/sundora/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useIsMobile } from '@/hooks/use-mobile';
import { useServerAction } from '@/hooks/use-server-action';
import { cn } from '@/lib/utils';
import { contactSchema, TContactValues } from '@/schemas/contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const form = useForm<TContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const { submit, isPending } = useServerAction<TContactValues>(sendLead, {
    messages: {
      loading: 'Đang gửi...',
      success: 'Gửi thành công!',
      error: (err) =>
        (err as Error).message || 'Gửi thất bại, vui lòng thử lại.',
    },
    afterSuccess: () => form.reset(),
  });

  const isMobile = useIsMobile();

  const onSubmit = (values: TContactValues) => {
    submit(values);
  };

  return (
    <div className="rounded-md bg-gradient-to-b from-sundora-secondary to-sundora-secondary-foreground px-6 py-5 lg:px-8 lg:py-6">
      <h1
        className={cn(
          'text-center text-4xl font-light text-sundora-primary uppercase',
          albra.className
        )}
      >
        ĐĂNG KÝ
      </h1>
      <h2
        className={cn(
          'mt-2 text-center text-lg text-sundora-primary',
          sparkling.className
        )}
      >
        Nhận tư vấn
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <div className="group flex flex-row gap-3 border-b border-sundora-secondary-foreground">
                  <FormLabel
                    className={cn(
                      'text-sm font-light text-white opacity-50 group-focus-within:opacity-100',
                      albra.className
                    )}
                  >
                    Họ và tên*
                  </FormLabel>
                  <FormControl>
                    <input
                      className={cn(
                        'text-sm font-light text-white outline-none',
                        albra.className
                      )}
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className={cn('text-lg', albra.className)} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="group flex flex-row gap-3 border-b border-sundora-secondary-foreground">
                  <FormLabel
                    className={cn(
                      'text-sm font-light text-white opacity-50 group-focus-within:opacity-100',

                      albra.className
                    )}
                  >
                    Số điện thoại*
                  </FormLabel>
                  <FormControl>
                    <input
                      className={cn(
                        'text-sm font-light text-white outline-none',
                        albra.className
                      )}
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className={cn('text-lg', albra.className)} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="group flex flex-row gap-3 border-b border-sundora-secondary-foreground">
                  <FormLabel
                    className={cn(
                      'text-sm font-light text-white opacity-50 group-focus-within:opacity-100',

                      albra.className
                    )}
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <input
                      className={cn(
                        'border-b border-sundora-secondary-foreground text-sm font-light text-white outline-none',
                        albra.className
                      )}
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className={cn('text-lg', albra.className)} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="group flex flex-col gap-3 border-b border-sundora-secondary-foreground">
                <FormLabel
                  className={cn(
                    'text-sm font-light text-white opacity-50 group-focus-within:opacity-100',

                    albra.className
                  )}
                >
                  Nội dung
                </FormLabel>
                <FormControl>
                  <textarea
                    className={cn(
                      'resize-none border-b border-sundora-secondary-foreground text-sm font-light text-white outline-none',
                      albra.className
                    )}
                    rows={isMobile ? 1 : 3}
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              variant="outline"
              className="mt-0 size-auto w-full cursor-pointer rounded-full bg-white! px-10 py-1 text-xs font-bold text-sundora-muted-foreground uppercase lg:mt-6 lg:w-auto"
              disabled={isPending}
            >
              gửi thông tin
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
