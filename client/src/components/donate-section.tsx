import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDonationSchema } from "@shared/schema";
import type { InsertDonation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HandHeart, Share2, Gift } from "lucide-react";

export default function DonateSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isRecurring, setIsRecurring] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InsertDonation>({
    resolver: zodResolver(insertDonationSchema),
    defaultValues: {
      isRecurring: false,
    },
  });

  const watchedAmount = watch("amount");

  const donationMutation = useMutation({
    mutationFn: async (data: InsertDonation) => {
      const response = await apiRequest("POST", "/api/donations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your donation!",
        description: "Your support helps us preserve Georgia's LGBTQ+ history.",
      });
      reset();
      setSelectedAmount(null);
      queryClient.invalidateQueries({ queryKey: ["/api/donations"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error processing donation",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertDonation) => {
    donationMutation.mutate(data);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setValue("amount", amount);
  };

  const handleRecurringChange = (recurring: boolean) => {
    setIsRecurring(recurring);
    setValue("isRecurring", recurring);
  };

  return (
    <section id="donate" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Support Our Mission</h2>
          <p className="text-xl text-black">Help us preserve and share Georgia's LGBTQ+ history for future generations</p>
        </div>

        {/* Impact Statement */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black">Your Support Makes a Difference</h3>
          <p className="text-lg text-black text-center leading-relaxed mb-8">
            Every donation helps us digitize historical documents, conduct oral history interviews, organize educational events, and maintain our growing archive of Georgia's LGBTQ+ heritage.
          </p>
          
          {/* Impact Numbers */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-black">Stories Collected</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">1,200+</div>
              <div className="text-black">Documents Digitized</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-black">Educational Events</div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="glass-effect rounded-xl p-8 mb-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Donation Type Toggle */}
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                type="button"
                onClick={() => handleRecurringChange(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  !isRecurring
                    ? "bg-purple-600 text-white"
                    : "bg-white/20 text-black hover:bg-white/30"
                }`}
              >
                One-Time
              </Button>
              <Button
                type="button"
                onClick={() => handleRecurringChange(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isRecurring
                    ? "bg-purple-600 text-white"
                    : "bg-white/20 text-black hover:bg-white/30"
                }`}
              >
                Monthly
              </Button>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[25, 50, 100, 250].map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-3 rounded-lg font-medium transition-colors ${
                    selectedAmount === amount
                      ? "bg-purple-600 text-white"
                      : "bg-white/20 text-black hover:bg-purple-600/50"
                  }`}
                >
                  ${amount}
                </Button>
              ))}
            </div>

            {/* Custom Amount */}
            <div>
              <Label htmlFor="amount" className="block text-sm font-medium text-black mb-2">
                Custom Amount ($)
              </Label>
              <Input
                id="amount"
                type="number"
                min="1"
                step="1"
                {...register("amount", { valueAsNumber: true })}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter amount"
              />
              {errors.amount && (
                <p className="text-red-400 text-sm mt-1">{errors.amount.message}</p>
              )}
            </div>

            {/* Donor Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="donorName" className="block text-sm font-medium text-black mb-2">
                  Name (Optional)
                </Label>
                <Input
                  id="donorName"
                  {...register("donorName")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label htmlFor="donorEmail" className="block text-sm font-medium text-black mb-2">
                  Email (Optional)
                </Label>
                <Input
                  id="donorEmail"
                  type="email"
                  {...register("donorEmail")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={donationMutation.isPending || !watchedAmount || watchedAmount <= 0}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
            >
              {donationMutation.isPending
                ? "Processing..."
                : `Donate $${watchedAmount || 0}${isRecurring ? "/month" : ""}`}
            </Button>
          </form>
        </div>

        {/* Other Ways to Support */}
        <div className="glass-effect rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black">Other Ways to Support</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-black">Volunteer</h4>
              <p className="text-black">Donate your time and skills to help with research, events, and outreach.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-black">Spread the Word</h4>
              <p className="text-black">Share our mission on social media and help us reach more people.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-black">In-Kind Donations</h4>
              <p className="text-black">Donate archival supplies, equipment, or professional services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
