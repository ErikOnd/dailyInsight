"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";

const InsightForm = () => (
	<Form.Root className="w-[260px]">
		<Form.Field className="mb-2.5 grid" name="inisght">
			<div className="flex items-baseline justify-between">
				<Form.Label className="text-[15px] font-medium leading-[35px] ">
				</Form.Label>
				<Form.Message
					match="valueMissing"
				>
					<Text size="xs">
						Please enter a inisght
					</Text>
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea
					className="bg-blackA2 shadow-blackA6 selection:bg-blackA6 selection: box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded p-2.5 text-[15px]  leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
					required
					placeholder="Enter your insight..."
				/>
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<Button
				className="inline-flex w-full items-center justify-center">
				Add Insight
			</Button>
		</Form.Submit>
	</Form.Root>
);

export default InsightForm;
